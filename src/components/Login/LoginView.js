import React from 'react';
import * as BS from 'react-bootstrap';
import { connect } from 'react-redux';
import { userActions } from '../../actions/userAction';

// const LoginView = () => (
//     <div>
//         <Login />
//     </div>
// );
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
/* eslint-disable */
class LoginView extends React.Component {
    constructor(props) {
        super(props);

        // this.props.dispatch(userActions.logout())
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                <h1 className="text-center mt-5 mb-5 font-weight-bold">Login Caro Game</h1>
                <BS.Row>
                    <BS.Col></BS.Col>    
                    <BS.Col xs={4}>
                        <BS.Form className="align-center" onSubmit={this.handleSubmit}>
                            <BS.Form.Group controlId="formBasicEmail">
                                <BS.Form.Label>Email address</BS.Form.Label>
                                <BS.Form.Control type="email" placeholder="Enter email" name="username" value={username} onChange={this.handleChange} />
                                <BS.Form.Text className="text-muted">
                                    We will never share your email with anyone else
                                </BS.Form.Text>
                            </BS.Form.Group>
                            <BS.Form.Group controlId="formBasicPassword">
                                <BS.Form.Label>Password</BS.Form.Label>
                                <BS.Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                            </BS.Form.Group>
                            <BS.Button variant="primary" type="submit">
                                Submit
                            </BS.Button>
                            {loggingIn}
                        </BS.Form>
                    </BS.Col>
                    <BS.Col></BS.Col>
                </BS.Row>
            </div>
        );
    }
}


const connectedLoginPage = connect(mapStateToProps)(LoginView);
export { connectedLoginPage as LoginView }; 

