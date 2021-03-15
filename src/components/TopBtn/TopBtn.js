import React from 'react';
import './TopBtn.css'

function TopBtn(){
    const onTop = (e)=>{
        document.getElementsByClassName("itemsBox")[0].scrollTo(0,0);
    }

    return (
        <div className="app-footer">
            <div className="topBtn" onClick={onTop}>
                <i className="fas fa-chevron-circle-up" />
            </div>
        </div>

    );
}

export default TopBtn;
