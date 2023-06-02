import React  from 'react';

const MyTable = () => {
  const data=localStorage.getItem('busDetail');
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
          return(
          <tr key={item.id}>
            <td>{item.busName}</td>
            <td>{item.source}</td>
            <td>{item.destination}</td>
          </tr>)
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
