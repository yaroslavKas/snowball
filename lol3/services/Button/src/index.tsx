import React from 'react';
import './index.scss';


const Button  = ({content}: any) => {
    return (
        <div>
            <p>Users:</p>
            <button className="button">{content}</button>
        </div>

    )
}

export default Button;