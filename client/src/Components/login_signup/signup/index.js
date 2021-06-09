import React, { Component } from 'react';
import { validate, showError } from '../../../ui/misc';
import logo from '../../../resources/images/sign-up.svg';
import './index.css';
import { register } from '../../../Actions';
import { connect } from 'react-redux';

class SignUp extends Component {
    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                value: '',
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            },
            password: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            },
            phoneNumber: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            },
            username: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            },
            confirmPassword: {
                value: '',
                validation: {
                    required: true,
                    confirm:'password'
                },
                valid: false,
                validationMessage: ''
            },
        }

    }

    updateForm(element) {
        const newFormdata = { ...this.state.formdata }
        const newElement = { ...newFormdata[element.id] }

        newElement.value = element.target.value;

        let validData = validate(newElement,newFormdata)
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

        if (formIsValid) {
            // axios.post('http://localhost:4000/register', {
            //     email: dataToSubmit.email,
            //     password: dataToSubmit.password,
            //     phoneNumber: dataToSubmit.phoneNumber,
            //     username: dataToSubmit.username
            // })
            //     .then(function (response) {
            //         console.log(response);// have to add function to handle
            //     }).catch(function (error) {
            //         console.log(error);
            //     });
            let user ={
                "username":dataToSubmit.username,
                "password":dataToSubmit.password,
                "email":dataToSubmit.email,
                "phoneNumber":dataToSubmit.phoneNumber
            }
            this.props.signup(user)
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        let formdata = this.state.formdata


        //need to implement verification using state
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
                            <h2>Welcome, Please Signup !</h2>
                            <div className="underline"></div>
                        </div>
                        <div className="label_inputs">
                            <div className="input_emails">
                                <input type="text" placeholder="Put your name here.." onChange={(e) => this.updateForm(e, e.id = "username")} />
                                { showError(formdata.username)}
                            </div>
                            <div className="input_emails">
                                <input type="email" placeholder="Put your email here.." onChange={(e) => this.updateForm(e, e.id = "email")} />
                                { showError(formdata.email)}
                            </div>
                            <div className="input_emails">
                                <input type="text" placeholder="Put your phone number here.." onChange={(e) => this.updateForm(e, e.id = "phoneNumber")} />
                                { showError(formdata.phoneNumber)}
                            </div>
                            <div className="input_passwords">
                                <input type="password" placeholder="Put your password here.." onChange={(e) => this.updateForm(e, e.id = "password")} />
                                { showError(formdata.password)}
                            </div>
                            <div className="input_passwords">
                                <input type="password" placeholder="Confirm your password here.." onChange={(e) => this.updateForm(e, e.id = "confirmPassword")} />
                                { showError(formdata.confirmPassword)}
                            </div>

                            {this.state.formError ?
                                <div className="error_label">Something is wrong, try again.</div>
                                : null
                            }
                            <button onClick={(event) => this.submitForm(event)}>SIGNUP</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    isLoggedIn: state.authentication.loggedIn
})

const mapDispatchToProps = (dispatch)=>({
    signup: (data) => dispatch(register(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);