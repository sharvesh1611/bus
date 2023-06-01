import axios from "axios";


axios.defaults.baseURL='http://172.16.1.238:5000';
const registerUrl='/bus/';

export const findBus=(src,dest,date)=>{
    return axios.get(registerUrl,{params:{
          Source: src,
          Destination: dest,
          Date: date
        }}
      );
      
}

// {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: {
//       Source: src,
//       Destination: dest,
//       Date: date
//     }