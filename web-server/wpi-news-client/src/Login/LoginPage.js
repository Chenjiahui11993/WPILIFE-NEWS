import LoginForm from './LoginForm';
import React from 'react';
class LoginPage extends React.Component {
    constructor() {
        super();
        // initial state
        this.state = {
            errors: {},
            user:{
                email: '',
                password: ''
            }
        };
    }
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user});
    }
    processFrom(event) {
        event.preventDefault();
        const email = this.state.user.email;
        const password = this.state.user.password;
        console.log('email', email);
        console.log('password', password);
    }
    render() {
        return (
            <LoginForm
            onSubmit = { (e) => this.processFrom(e) }
            onChange = { (e) => this.changeUser(e) }
            errors = {this.state.errors}/>
        );
    }

}
export default LoginPage;