import React from 'react';
import order from '../../resources/images/take-order.svg';
import getparcel from '../../resources/images/get-parcel.svg';
import loadparcel from '../../resources/images/load-parcel.svg';
import homedelivery from '../../resources/images/home-delivery.svg';
import './index.css';

function Process() {
    let img =[order, getparcel, loadparcel, homedelivery]
    let process =["TAKING THE ORDER", "GETTING THE PARCEL", "LOADING PACKAGE", "DELIVER TO DOOR"]

    return (
        <div className="outer_layer">
            <div><h1>THE PROCESS</h1></div>
            <div className="inner_layer">
            {img.map((val,i)=>(
                <div className="process_pic" key={i}>
                    <img src={val} alt={val} key={i}/>
                    <h4 key={val}>{process[i]}</h4>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Process;