import React, {useEffect, useState, useContext} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {UserContext} from '../context/UserContext';

import axios from 'axios';
const checkerSrv = axios.create({
    baseURL:"http://localhost:5000"
    // baseURL:"https://ff25d5ada0d8.ngrok.io"
    // baseURL:"https://rimmy-todos-conn.cfapps.eu10.hana.ondemand.com"
  })

function Checker(props){
    const [user, setUser] = useContext(UserContext);

    useEffect(()=>{
        vaildAccess(props.match.params.id, props.match.params.targetId);
    }, [])
 
    const vaildAccess = async(id, targetId)=>{
        try {
            if(!id) props.history.push("/noauthorized");                                                                          
            var res = await checkerSrv.post(`/api/v1/checker/${id}/${targetId}`);  
                
            if(!res.data.vaild) return alert(res.data.message);
            if(!res.data.vaildUserId) return alert(res.data.message);
            if(!res.data.targetId) return alert(res.data.message);
            //유저네임 말고 유저 프로필인데 유저 피로필 확인해서 토큰 확인하고 컨텍스트에 담을 것임

            setUser({
                userId: res.data.vaildUserId,
                userName: res.data.vaildUserName,
                targetId: res.data.targetId,
                targetName: res.data.targetName
            });
            props.history.push(res.data.redirectUrl);

        } catch (error) {
            alert("서버와 통신할 수 없습니다.");
        }
    }

    return (
        <div>
            checker
        </div>
    )
}

export default Checker;