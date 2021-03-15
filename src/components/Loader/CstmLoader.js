import React from 'react';
import './CstmLoader.css';
import LoadingOverlay from 'react-loading-overlay';

function CstmLoader({loading}){
    // var isActive = true;
    // return(
    //     <LoadingOverlay
    //         active={loading}
    //         spinner
    //         text='Loading your content...'
    //         >
    //         {/* <div id="cstmloader" className="loading background">
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //         </div> */}
    //     </LoadingOverlay>
        
    // );
    return(
        <div className="background">
        <div id="cstmloader" className="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    );
}

export default CstmLoader;