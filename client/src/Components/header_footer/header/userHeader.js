import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../../../Actions';

function UserHeader(props) {
    return (
        <>
            <NavLink to="/bookings" className="active">
                <MenuItem style={{ textDecoration: 'none', fontWeight: 'bold' }}>BOOKINGS</MenuItem>
            </NavLink>
            <NavLink to="/my_profile" className="active">
                <MenuItem style={{ textDecoration: 'none', fontWeight: 'bold' }}>PROFILE</MenuItem>
            </NavLink>
            <div>
                <MenuItem style={{ color: 'hsl(167, 89%, 30%)', fontWeight: 'bold' }} onClick={() => props.logout()}>LOGOUT</MenuItem>
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    state
})
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(Logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);