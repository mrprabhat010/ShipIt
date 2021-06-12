import React, { Component} from 'react';
import banner from '../../resources/images/home-delivery.svg';
import Query from '../query';
import Faq from './faq';
import classes from './index.module.css';
import { fetchService } from '../../Actions';
import { connect } from 'react-redux';
import Modal from '../../ui/modal';
import BookingForm from '../Booking/bookingForm';
import { history } from '../../ui/history'


class Services extends Component {
    state = {
        data: null,
        modal:false
    }
     componentDidMount(revProps, prevState) {
        let {id} = this.props.match.params
     this.props.service(id);
    }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.props.data) {
            this.setState({
                data: this.props.data,
                
            })
        }    
    }

    handleModal=()=>{
        if(this.props.user){
            this.setState({modal:true})
        }
        else{
            history.push('/sign_in')
        }
        
    }
    clickAway=()=>{
        this.setState({modal:false})
    }
    
    
    render() {
        let data = this.state.data
        return (
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.left}>
                        <div className={classes.left_top}>
                            {data != null ? (<div className={classes.content}>
                                <h1>{data.serviceName}</h1>
                                <h5 className={classes.description}>{data.description}</h5>
                                <h3 className={classes.heading}>Parcel Size</h3>
                                <h5 className={classes.description}>{data.parcelSize}</h5>
                                <h3 className={classes.heading}>Parcel Charges</h3>
                                <h5 className={classes.description}>{data.parcelCharges}</h5>
                            </div>) : null}
                        </div>
                        <div className={classes.left_bottom}>
                            <h2 className={classes.heading}>FAQ</h2>
                            <Faq />
                            <div ><button className={classes.button} onClick={this.handleModal}>Book the service</button></div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.right_top}>
                            <img src={banner} alt = "banner"/>
                        </div>
                        <div className={classes.right_bottom}>
                            <Query />
                        </div>
                    </div>
                </div>
                            {this.state.modal ?<Modal modal={this.state.modal} 
                            clickAway={this.clickAway} 
                            content={<BookingForm close={()=>this.clickAway()} 
                            user={this.props.user.username}
                            service={this.props.data.serviceName} 
                            />}/>
                            :null}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.services
})
const mapDispatchToProps = (dispatch) => ({
    service: (id) => dispatch(fetchService(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Services);