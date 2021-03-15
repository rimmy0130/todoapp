import React from 'react';
import './StdLoader.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function StdLoader({loading}){
    return (
      <div className="spinner">
        <Loader
          visible={loading}
          type="TailSpin"
          color="#0A6ED1"
          height={100}
          width={100}
        />
      </div>
        
    );
}

export default StdLoader;