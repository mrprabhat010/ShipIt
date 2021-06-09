import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../resources/images/icon.svg';

export const Logo = (props) => {

    const template = <div style={{
        display: 'flex',
        height:'100%',
        alignItems: 'center',
    }}>
        <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background:`url(${icon}) no-repeat`,
        }}
    >
    </div>
        <div style={{color:'rgb(10, 129, 129)', fontSize:'20px', fontWeight:'bold',marginLeft:5,}}>Ship It</div>
    </div>

    if(props.link){
        return (
            <Link to={props.linkTo} style={{textDecoration:'none'}}>
                {template}
            </Link>
        )
    } else {
        return template
    }

}