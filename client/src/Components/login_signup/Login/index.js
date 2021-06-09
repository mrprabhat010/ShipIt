import React, { Component } from 'react';
import { validate } from '../../../ui/misc';
import './index.css';
import {Link } from 'react-router-dom';
import logo from '../../../resources/images/login-page.svg';
import { connect } from 'react-redux';
import {login } from '../../../Actions';
// import {Person , VisibilityOffRounded } from '@material-ui/icons';
// import { TextField} from '@material-ui/core';

class Login extends Component {
    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                value: '',
                element: 'input',
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            },
            password: {
                value: '',
                element: 'input',
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            }
        }

    }

    updateForm(element) {
        const newFormdata = { ...this.state.formdata }
        const newElement = { ...newFormdata[element.id] }

        newElement.value = element.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm(event) {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for (let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
        let user = {
            'email': dataToSubmit.email,
            'password': dataToSubmit.password
          };
        if (formIsValid) {
            this.props.login(user)
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="outer_wrapper">
                    <div className="img_wrapper">
                        <div className="login_logo">
                            <img src={logo} alt="login_logo" />
                        </div>
                    </div>
                    <div className="main_divider"></div>
                    <div className="signin_wrapper">
                        <div className="header_wrapper">
                            <h2>Welcome, Please Login !</h2>
                            <div className="underline"></div>
                        </div>
                        <div className="label_inputs">
                            <div className="input_email">
                                {/* <label>E-mail</label> */}
                                {/* <div className="icon">
                                <Person/>
                                </div> */}
                                <input type="email" placeholder="Put your email here.." onChange={(e) => this.updateForm(e, e.id = "email")}/>
                            </div>
                            <div className="input_pass">
                                {/* <label>Password</label> */}
                               {/* <div className="icon">
                               <VisibilityOffRounded/>
                               </div> */}
                                <input type="password" placeholder="Put your password here.." onChange={(e) => this.updateForm(e, e.id = "password")} />
                                {/* <TextField id="outlined-basic" label="Password" variant="outlined" class="input_pass" /> */}
                            </div>

                            {this.state.formError ?
                                <div className="error_label">Something is wrong, try again.</div>
                                : null
                            }
                            <button onClick={(event) => this.submitForm(event)}>Log in</button>
                        </div>
                        <div>Don't have an Account? <Link to='/sign_up' style={{textDecoration: 'none',color:'blue'}}>Signup Here!</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isLoggedIn : state.authentication.loggedIn,
  });

  const mapDispatchToProps = (dispatch) =>({
      login :(data) =>dispatch(login(data))

  })
export default connect(mapStateToProps, mapDispatchToProps)(Login);