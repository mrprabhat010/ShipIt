import React from 'react';
import notfound from '../resources/images/notFound.svg' 
function NotFound() {
    return (
        <div>
            <img src={notfound} alt="Not found" style={{width:'100vw', height:'99vh'}} />
        </div>
    );
}

export default NotFound;
