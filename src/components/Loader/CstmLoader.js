import React from 'react';
import './CstmLoader.css';
import LoadingOverlay from 'react-loading-overlay';

function CstmLoader(){
    return(
        <>
            <div className="test" />
            <div id="cstmloader" className="loading background">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}

export default CstmLoader;