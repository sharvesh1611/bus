import React  from 'react';

const MyTable = () => {
  const data=[{busName:"selva",source:"Adad",destination:"serevb"}];
  return (
    <table>
      <thead>
        <tr>
          <th>busName</th>
          <th>Source</th>
          <th>Destination</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>{
          <tr key={item.busName}>
            <td>{item.busName}</td>
            <td>{item.source}</td>
            <td>{item.destination}</td>
          </tr>
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
