import axios from "axios";


axios.defaults.baseURL='http://172.16.1.238:5000';
const registerUrl='/bus/';
const Url='/passenger/'

export const findBus=(src,dest,date)=>{
    return axios.get(registerUrl,{params:{
          Source: src,
          Destination: dest,
          Date: date
        }}
      );
}
export const createPassenger=(name,age,gender,governmentIdType)=>{
  console.log(name,age,gender,governmentIdType);
    return axios.post(Url,{
          Name: name,
          Age: age,
          Gender: gender,
          GovernmentIdType:governmentIdType
        }
      );
      
}