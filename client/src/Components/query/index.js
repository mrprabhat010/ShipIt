import React, { Component } from 'react';
import classes from './index.module.css';
import { validate } from '../../ui/misc';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { makeQueries } from '../../Actions';
import Alert from '../../ui/alert';

class Query extends Component {
    state = {
        formError: false,
        formSuccess: false,
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
            from: {
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            to: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            },
            weight: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            },
            height: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            },
            length: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            },
            width: {
                value: '',
                validation: {
                    required: true
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

        let validData = validate(newElement, newFormdata)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }
    clearForm = (data) => {
        let newData = { ...data }
        for (let key in newData) {
            newData[key].value = '';
            newData[key].valid = false;
        }
        this.setState({
            formdata: newData,
            formSuccess: false
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
        this.clearForm(this.state.formdata)

        if (formIsValid) {
            let data = {
                "emailId": dataToSubmit.email,
                "to": dataToSubmit.to,
                "from": dataToSubmit.from,
                "weight": dataToSubmit.weight,
                "height": dataToSubmit.height,
                "width": dataToSubmit.width,
                "length": dataToSubmit.length,
            }
            this.props.query(data)
            this.setState({ formSuccess: true })

        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        let { email, to, from, weight, height, width, length } = this.state.formdata
        return (
            <div className={classes.container}>
                <div className={classes.inner_wrapper}>
                    <div className={classes.heading}><h3>Get a Quote...</h3></div>
                    <div className={classes.input_wrapper}>
                        <div>
                            <label className={classes.label}>EmailId*</label>
                            <input type="text"
                                value={email.value}
                                placeholder="Enter your email address"
                                className={classes.input_1}
                                onChange={(e) => this.updateForm(e, e.id = "email")} />

                            <label className={classes.label}>From*(collection)</label>
                            <input type="text"
                                value={from.value}
                                placeholder="Enter your pickup location."
                                className={classes.input_1}
                                onChange={(e) => this.updateForm(e, e.id = "from")} />

                            <label className={classes.label}>To*(delivery)</label>
                            <input type="text"
                                value={to.value}
                                placeholder="Enter your drop location."
                                className={classes.input_1}
                                onChange={(e) => this.updateForm(e, e.id = "to")} />

                            <label className={classes.label}>Weight*</label>
                            <input type="number"
                                value={weight.value}
                                min={0}
                                placeholder="Enter total weight in Kg"
                                className={classes.input_1}
                                onChange={(e) => this.updateForm(e, e.id = "weight")} />

                            <label className={classes.label}>Enter Dimensions in cm*</label>
                            <div className={classes.input_inner}>
                                <div className={classes.inner_input}>
                                    <input type="number"
                                        value={height.value}
                                        min={0}
                                        placeholder="height"
                                        className={classes.input_2}
                                        onChange={(e) => this.updateForm(e, e.id = "height")} />
                                </div>

                                <div className={classes.inner_input}>
                                    <input type="number"
                                        value={length.value}
                                        min={0}
                                        placeholder="length"
                                        className={classes.input_2}
                                        onChange={(e) => this.updateForm(e, e.id = "length")} />
                                </div>

                                <div className={classes.inner_input}>
                                    <input type="number"
                                        value={width.value}
                                        min={0}
                                        placeholder="width"
                                        className={classes.input_2}
                                        onChange={(e) => this.updateForm(e, e.id = "width")} />
                                </div>
                            </div>
                            <div className={classes.button}>
                                <Button variant="contained" color="primary" onClick={(e) => this.submitForm(e)} >Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{this.state.formSuccess ? <Alert state={this.state.formSuccess} severity={"success"} alert={"submitted your query. ship will revert back shortly!"} /> : null}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isSubmitted: state.data.isSubmitted
})
const mapDispatchToProps = (dispatch) => ({
    query: (data) => dispatch(makeQueries(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Query);