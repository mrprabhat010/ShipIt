import React, { Component } from 'react';
import InputField from '../../ui/input';
import Alert from '../../ui/alert';
import classes from './bookingForm.module.css';
import { validate } from '../../ui/misc';
import Button from '@material-ui/core/Button';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { makeBookings } from '../../Actions';
import { connect } from 'react-redux'

class Booking extends Component {
    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            recieverName: {
                value: '',
                config: {
                    label: 'Reciever Name',
                    type: 'text',
                    // required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            senderPhoneNumber: {
                value: '',
                config: {
                    label: 'Your Phone Number',
                    type: 'text',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            recieverPhoneNumber: {
                value: '',
                config: {
                    label: 'Reciever Phone Number',
                    type: 'text',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            time: {
                value: '',
                config: {
                    label: 'Choose time to pick your package',
                    type: 'datetime-local',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            senderCountry: {
                value: '',
                config: {
                    label: 'Enter your country',
                    type: 'text',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            senderCity: {
                value: '',
                config: {
                    label: 'Enter your city',
                    type: 'text',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            senderAddress: {
                value: '',
                config: {
                    label: 'Enter your Address',
                    type: 'text',
                    //required,
                    //multiline
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            senderZipCode: {
                value: '',
                config: {
                    label: 'Your Zip Code',
                    type: 'text',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            recieverCountry: {
                value: '',
                config: {
                    label: 'Enter reciever\'s country',
                    type: 'text',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            recieverCity: {
                value: '',
                config: {
                    label: 'Enter reciever\'s city',
                    type: 'text',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            recieverAddress: {
                value: '',
                config: {
                    label: 'Enter reciever\'s Address',
                    type: 'text',
                    //required,
                    //multiline
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
            recieverZipCode: {
                value: '',
                config: {
                    label: 'Reciever\'s ZipCode',
                    type: 'text',
                    //required
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
        },
        service: this.props.service
    }

    updateForm(element) {
        const newFormdata = { ...this.state.formdata }
        const newElement = { ...newFormdata[element.id] }

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
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
            // formSuccess: false
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
            let data = { senderName: this.props.user, service: this.state.service, ...dataToSubmit }
            this.props.book(data)
            //    if(this.props.data===201){ need to resolve this issue
            this.setState({ formSuccess: true })
            //    }
            this.clearForm(this.state.formdata)
        } else {
            this.setState({
                formError: true
            })
        }
    }
    handleClose = () => {
        this.props.close()
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.inner_wrapper_1}>
                    <div className={classes.heading}><h3>Booking Form</h3></div>
                    <div className={classes.close_icon} onClick={this.handleClose}><CloseRoundedIcon /></div>
                </div>
                <div className={classes.inner_wrapper_2}>
                    <InputField
                        id={'recieverName'}
                        formdata={this.state.formdata}
                        label='Reciever Name'
                        required
                        width={600}
                        value={this.state.formdata.recieverName.value}
                        change={(element) => this.updateForm(element)}
                    />
                    <InputField
                        id={'senderPhoneNumber'}
                        formdata={this.state.formdata}
                        label='Your phone Number'
                        required
                        width={600}
                        value={this.state.formdata.senderPhoneNumber.value}
                        change={(element) => this.updateForm(element)}
                    />
                    <InputField
                        id={'recieverPhoneNumber'}
                        formdata={this.state.formdata}
                        label='Reciever phone number'
                        required
                        width={600}
                        value={this.state.formdata.recieverPhoneNumber.value}
                        change={(element) => this.updateForm(element)}
                    />
                    <InputField
                        id={'time'}
                        formdata={this.state.formdata}
                        label='Enter time for package pickup'
                        type='date'
                        width={600}
                        InputLabelProps={{
                            shrink: true
                        }}
                        required
                        value={this.state.formdata.time.value}
                        change={(element) => this.updateForm(element)}
                    />
                </div>
                <div className={classes.inner_wrapper_3}>
                    <div className={classes.sender_wrapper}>
                        <h5 className={classes.label}>Your Address</h5>
                        <InputField
                            id={'senderCountry'}
                            formdata={this.state.formdata}
                            label='Your Country'
                            required
                            width={280}
                            value={this.state.formdata.senderCountry.value}
                            change={(element) => this.updateForm(element)}
                        />
                        <InputField
                            id={'senderCity'}
                            formdata={this.state.formdata}
                            label='Your City'
                            required
                            width={280}
                            value={this.state.formdata.senderCity.value}
                            change={(element) => this.updateForm(element)}
                        />
                        <InputField
                            id={'senderAddress'}
                            formdata={this.state.formdata}
                            label='Enter Your Address'
                            required
                            width={280}
                            multiline
                            rows={2}
                            value={this.state.formdata.senderAddress.value}
                            change={(element) => this.updateForm(element)}
                        />
                        <InputField
                            id={'senderZipCode'}
                            formdata={this.state.formdata}
                            label='Your Zip Code'
                            required
                            width={280}
                            value={this.state.formdata.senderZipCode.value}
                            change={(element) => this.updateForm(element)}
                        />
                    </div>
                    <div className={classes.reciever_wrapper}>
                        <h5 className={classes.label}>Reciever's Address</h5>
                        <InputField
                            id={'recieverCountry'}
                            formdata={this.state.formdata}
                            label='Reciever country'
                            required
                            width={280}
                            value={this.state.formdata.recieverCountry.value}
                            change={(element) => this.updateForm(element)}
                        />
                        <InputField
                            id={'recieverCity'}
                            formdata={this.state.formdata}
                            label='Reciever City'
                            required
                            width={280}
                            value={this.state.formdata.recieverCity.value}
                            change={(element) => this.updateForm(element)}
                        />
                        <InputField
                            id={'recieverAddress'}
                            formdata={this.state.formdata}
                            label='Enter Reciever Address'
                            required
                            multiline
                            width={280}
                            rows={2}
                            value={this.state.formdata.recieverAddress.value}
                            change={(element) => this.updateForm(element)}
                        />
                        <InputField
                            id={'recieverZipCode'}
                            formdata={this.state.formdata}
                            label='Reciever Zip Code'
                            required
                            width={280}
                            value={this.state.formdata.recieverZipCode.value}
                            change={(element) => this.updateForm(element)}
                        />
                    </div>
                </div>
                <div className={classes.inner_wrapper_4}>
                    <div className={classes.close}><Button color='secondary' variant="contained" onClick={this.handleClose} >Close</Button></div>
                    <div className={classes.book}><Button variant="contained" color="primary" onClick={(event) => this.submitForm(event)}>Book</Button></div>
                </div>
                {this.state.formSuccess ? <Alert state={this.state.formSuccess} severity={"success"} alert={`Booking Successful!`} /> : null}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.data
})
const mapDispatchToProps = (dispatch) => ({
    book: (data) => dispatch(makeBookings(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Booking);