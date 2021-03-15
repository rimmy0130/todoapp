import axios from 'axios';

const ApiServer = axios.create({
  // baseURL:"http://localhost:7000"
  // baseURL:"https://6ea087e7301f.ngrok.io"
  baseURL:"https://rimmy-todos-node.cfapps.eu10.hana.ondemand.com"
})

const getToken = async()=>{
    try {
      var res = await ApiServer.get(`/api/v1/oauth/token`,{
        headers: {"authorization": "Bearer SVNUTi1DaUF1dGghZGV2MDMwODplQzFwYzNSdUxXTnBMV05zYVdWdWRDMXpaV055WlhRdE1ETXdPQzEwYjJSdg=="}
      });

      return res.data.access_token;
    } catch (error) {
      return error;
    }
  }

export default {ApiServer, getToken};
 