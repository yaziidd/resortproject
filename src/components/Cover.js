import React from 'react';
import './Cover.css';

const Cover = ({cover, children})=>{
    return(
        <React.Fragment>
            <div className = {cover}>{children}</div>
        </React.Fragment>
    )
}

export default Cover;