import axios from "axios";


axios.defaults.baseURL='http://localhost:5000';
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