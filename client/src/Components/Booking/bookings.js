import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookings } from '../../Actions';
import classes from './bookings.module.css';
import Table from '../../ui/table';

class Bookings extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        await this.props.bookings(this.props.user.username);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.props.data) {
            this.setState({ data: this.props.data });
        }
    }

    render() {
        let data = this.state.data;
        return (
            <div className={classes.container}>
                {data.length ? <div className={classes.table}><Table rows={data} /></div> :
                    <div className={classes.nodata}>
                        <h3>You have not used our services yet.</h3>
                    </div>
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data.data
})
const mapDispatchToProps = (dispatch) => ({
    bookings: (user) => dispatch(fetchBookings(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(Bookings);