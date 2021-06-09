import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
// import Button from '@material-ui/core/Button';
import { scrollToElement } from '../../../ui/misc';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../../ui/logo';
import UserMenu from './userHeader';
// import { Link } from 'react-scroll';

let user = localStorage.getItem('user');
class Header extends Component {
    state = {
        headerShow: false,
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {
        if (window.scrollY > 10) {
            this.setState({
                headerShow: true
            })
        }
        else {
            this.setState({
                headerShow: false
            })
        }
    }


    render() {
        return (
            <AppBar
                position="sticky"
                style={{
                    backgroundColor: this.state.headerShow ? '#fff' : 'transparent',
                    boxShadow: this.state.headerShow ? '1px 0 5px #ccc' : 'none',
                    padding: '10px 0',
                    height: '50px',
                    justifyContent: 'center'
                }}
            >
                <Toolbar >
                    <div style={{ flexGrow: 1, width: '100%', display: 'flex', }}>
                        <div className="header_logo">
                            <Logo
                                link={true}
                                linkTo="/"
                                width="50px"
                                height="50px"
                            />
                        </div>
                    </div>

                    <NavLink to="/" >
                        <MenuItem style={{ fontWeight: 'bold' }} onClick={() => scrollToElement('home')}>HOME</MenuItem>
                    </NavLink >
                    <div>
                        {/* <Link activeClass="active" isDynamic={true}> */}
                            <MenuItem onClick={() => scrollToElement('services')} style={{ color: 'hsl(167, 89%, 30%)', fontWeight: 'bold' }} >OUR SERVICES</MenuItem>
                        {/* </Link> */}
                    </div>
                    {user ? <UserMenu /> : <NavLink to="/sign_in" className="active">
                        <MenuItem style={{ textDecoration: 'none', fontWeight: 'bold' }}>LOGIN</MenuItem>
                    </NavLink>}

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;