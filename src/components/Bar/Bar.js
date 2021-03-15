import React from 'react';
import './Bar.css'
import CloseBtnImg from '../../assets/images/CloseBtn.png';

function Bar(){
    const onClose = (e)=>{
        window.location.href = "app://close";
    }
    return (
        <div className="app-header">
            <div className="window-close" onClick={onClose}>
                <img src={CloseBtnImg} alt="" height="30px" />
            </div>
        </div>
    );
}

export default Bar;
