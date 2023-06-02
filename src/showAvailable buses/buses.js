import React  from 'react';
import { useNavigate } from 'react-router-dom';
import './buses.css';

const MyTable = () => {
  // const data=JSON.parse(localStorage.getItem('busDetail'));
  const data=[{id:1,busName:"selva",source:"Tirunelveli",destination:"chennai"},
              {id:2,busName:"sharn",source:"Tirunelveli",destination:"chennai"},
              {id:3,busName:"sharvesh",source:"Tirunelveli",destination:"chennai"},
              {id:4,busName:"selva",source:"Tirunelveli",destination:"chennai"},
              {id:5,busName:"selva",source:"Tirunelveli",destination:"chennai"}
              ]
  localStorage.clear();
  const navigate=useNavigate();
  const  goSeatSelectPage=(event)=>{
    console.log(event);
    navigate('/');
  }
  return (
    <div className='table_container'>
      <div className='container'>
        <div className='heading'>
          <p>Available Buses from <span>{data[0].source.toUpperCase()}</span> to <span>{data[0].destination.toUpperCase()}</span></p>
        </div>
        <table>
          <thead>
            <tr>
              <th>BusName</th>
              <th>Departured From</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item)=>{
              return(<tr key={item.id} onClick={()=>goSeatSelectPage(item)}>
                <td>{item.busName.toUpperCase()}</td>
                <td>{item.source.toUpperCase()}</td>
                <td>{item.destination.toUpperCase()}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
