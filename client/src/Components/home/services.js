import React, { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchServices } from '../../Actions';

class Services extends Component {
    state = {
        data: []
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.props.data) {
            this.setState({ data: this.props.data });
        }
    }
    componentDidMount() {
        this.props.services();
    }
    render() {
        let data = this.state.data
        return (
            <div className="outer_box">
                <div><h1>OUR SERVICES</h1></div>
                <div className="inner_box">
                    {data.map((val, i) => (
                        <div className="service_box" key={i}>
                            <div style={{ height: '50%' }}> <h3 key={val}>{val.serviceName}</h3>
                                <h6 key={val.id}>{val.description}</h6>
                            </div>
                            <Link to={`/services/${val.id}`}
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '40%'
                                }}>
                                <button className="btn-grad">BOOK</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.services.data
})

const mapDispatchToProps = (dispatch) => ({
    services: () => dispatch(fetchServices())
})

export default connect(mapStateToProps, mapDispatchToProps)(Services);