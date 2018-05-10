import './NewsPanel.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import _ from 'lodash';

class NewsPanel extends React.Component {
    constructor() {
        super();
        this.state = { news: null };
    }
    componentDidMount() { //constructor - render-componentDidMount
        this.loadMoreNews();
        this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
        window.addEventListener('scroll', () => this.handleScroll());
    }
    renderNews() {
        const news_list = this.state.news.map((news) => {
            return (
                <a className='list-group-item' key={news.digest} href='#'>
                    <NewsCard news={ news } />
                </a>
            );
        });
        return (
            <div className='container-fluid'>
                <div className='list-group'>
                    {news_list}
                </div>
            </div>
        );
    }
    handleScroll() {
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
            this.loadMoreNews();
        }
    }
    loadMoreNews() {
        console.log('load more news')
        const news_url = 'http://' + window.location.hostname + ':3000' + '/news';
        const request = new Request(news_url, { method: 'GET', cache: false });
        fetch(request)
            .then(res => res.json())
            .then(new_news => {  //for res.json asy
                this.setState({
                    news: this.state.news ? this.state.news.concat(new_news) : new_news,
                }); // re-render()
            });
    }
    render() {
        if (this.state.news) {
            return (
                <div>
                    {this.renderNews()}
                </div>
            );
        } else {
            return (
                <div>
                    Loading.....
                </div>
            );
        }
    }
}
export default NewsPanel;