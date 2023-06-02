import React, { useState } from 'react';
import './passenger.css';
import {createPassenger} from '../service/travels.service';

const PassengerDetailsPage = ({ numberOfPassengers }) => {
  const [passengerDetails, setPassengerDetails] = useState(
    Array(numberOfPassengers).fill({ name: '', age: '', genderType: '', governmentIdType: '', governmentId: '' })
  );
  const [governmentIdValues, setGovernmentIdValues] = useState(Array(numberOfPassengers).fill(''));

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;

    setPassengerDetails((prevPassengerDetails) => {
      const updatedDetails = [...prevPassengerDetails];
      updatedDetails[index] = { ...updatedDetails[index], [name]: value };
      return updatedDetails;
    });

    setGovernmentIdValues((prevGovernmentIdValues) => {
      const updatedValues = [...prevGovernmentIdValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  const handleSubmit = (event, index) => {
    event.preventDefault();
    console.log(passengerDetails);
    passengerDetails.map((item,index)=>{
     return  createPassenger(item.name,item.age,item.genderType,item.governmentIdType).then((res)=>console.log(res.data))
      .catch(err=>console.log(err.message))
    })
    // Perform any necessary actions with passenger details
    // Reset passenger details state if needed
    setPassengerDetails((prevPassengerDetails) => {
      const updatedDetails = [...prevPassengerDetails];
      updatedDetails[index] = { name: '', age: '', genderType: '', governmentIdType: '', governmentId: '' };
      return updatedDetails;
      
    });
  };


  const renderPassengerForms = () => {
    return passengerDetails.map((details, index) => (
      <form key={index} className="passenger-form" onSubmit={(event) => handleSubmit(event, index)}>
        <h2>Passenger {index + 1}</h2>
        <div>
          <label htmlFor={`name-${index}`}>Name:</label>
          <input
            type="text"
            id={`name-${index}`}
            name={`name-${index}`}
            onChange={(event) => handleInputChange(event, index)}
          />
        </div>
        <div>
          <label htmlFor={`age-${index}`}>Age:</label>
          <input
            type="number"
            id={`age-${index}`}
            name={`age-${index}`}
            onChange={(event) => handleInputChange(event, index)}
          />
        </div>
        <div>
          <label htmlFor={`genderType-${index}`}>Gender:</label>
          <select
            id={`genderType-${index}`}
            name={`genderType-${index}`}
            onChange={(event) => handleInputChange(event, index)}
            required
          >
            <option value="">Select Gender Type</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor={`governmentIdType-${index}`}>Government ID Type:</label>
          <select
            id={`governmentIdType-${index}`}
            name={`governmentIdType-${index}`}
            onChange={(event) => handleInputChange(event, index)}
            required
          >
            <option value="">Select ID Type</option>
            <option value="Aadhaar">Aadhaar</option>
            <option value="PAN Card">PAN Card</option>
          </select>
        </div>
        {/* {governmentIdValues[index] === 'Aadhaar' || governmentIdValues[index] === 'PAN Card' ? (
          <div>
            <label htmlFor={`governmentId-${index}`}>Government ID:</label>
            <input
              type="text"
              id={`governmentId-${index}`}
              value={passengerDetails[index].governmentId}
              onChange={(event) => handleInputChange(event, index)}
              required
            />
          </div>
        ) : null} */}
        <button type="submit">Submit</button>
      </form>
    ));
  };

  return (
    <div className="passenger-details-page">
      <h1>Passenger Details</h1>
      {renderPassengerForms()}
    </div>
  );
};

export default PassengerDetailsPage;







// import React, { useState } from 'react';
// import './passenger.css';

// const PassengerDetailsPage = ({ numberOfPassengers }) => {
//   const [selected, setSelected] = useState("");

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array(numberOfPassengers).fill({ name: '', age: '', governmentIdType: '', governmentId: '' })
//   );

//   const handleInputChange = (event, index) => {
//     const { name, value } = event.target;

//     if (name.startsWith('governmentIdType')) {
//       // Clear ID number when ID type changes
//       const idIndex = name.split('-')[1];
//       setPassengerDetails((prevPassengerDetails) => {
//         const updatedDetails = [...prevPassengerDetails];
//         updatedDetails[index] = { ...updatedDetails[index], [name]: value, [`governmentId-${idIndex}`]: '' };
//         console.log('updated details',updatedDetails);
//         // setSelected(value);
//         return updatedDetails;
//       });
//     } else {
//       setPassengerDetails((prevPassengerDetails) => {
//         const updatedDetails = [...prevPassengerDetails];
//         updatedDetails[index] = { ...updatedDetails[index], [name]: value };
//         return updatedDetails;
//       });
//     }
//   };

//   const handleSubmit = (event, index) => {
//     event.preventDefault();
//     // Perform any necessary actions with passenger details
//     console.log(passengerDetails);
//     // Reset passenger details state if needed
//     setPassengerDetails((prevPassengerDetails) => {
//       const updatedDetails = [...prevPassengerDetails];
//       updatedDetails[index] = { name: '', age: '', governmentIdType: '', governmentId: '' };
//       return updatedDetails;
//     });
//   };

//   const renderPassengerForms = () => {
//     return passengerDetails.map((details, index) => (
//       <form key={index} className="passenger-form" onSubmit={(event) => handleSubmit(event, index)}>
//         <h2>Passenger {index + 1}</h2>
//         <div>
//           <label htmlFor={`name-${index}`}>Name:</label>
//           <input
//             type="text"
//             id={`name-${index}`}
//             name={`name-${index}`}
//             onChange={(event) => handleInputChange(event, index)}
//           />
//         </div>
//         <div>
//           <label htmlFor={`age-${index}`}>Age:</label>
//           <input
//             type="number"
//             id={`age-${index}`}
//             name={`age-${index}`}
//             onChange={(event) => handleInputChange(event, index)}
//           />
//         </div>
//         <div>
//           <label htmlFor={`genderType-${index}`}>Gender:</label>
//           <select
//             id={`genderType-${index}`}
//             name={`genderType-${index}`}
//             onChange={(event) => handleInputChange(event, index)}
//             required
//           >
//             <option value="">Select Gender Type</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Transgender">Transgender</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//         <div>
//           <label htmlFor={`governmentIdType-${index}`}>Government ID Type:</label>
//           <select
//             id={`governmentIdType-${index}`}
//             name={`governmentIdType-${index}`}
//             onChange={(event) => handleInputChange(event, index)}
//             required
//           >
//             <option value="">Select ID Type</option>
//             <option value="Aadhaar">Aadhaar</option>
//             <option value="PAN Card">PAN Card</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//         <div>hi setSelected</div>
//         {setPassengerDetails && setPassengerDetails.length && (
//           <div>
//             <label htmlFor={`governmentId-${index}`}>Government ID Number:</label>
//             <input
//               type="text"
//               id={`governmentId-${index}`}
//               name={`governmentId-${index}`}
//               onChange={(event) => handleInputChange(event, index)}
//               required
//             />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     ));
//   };

//   return (
//     <div className="passenger-details-page">
//       <h1>Passenger Details</h1>
//       {renderPassengerForms()}
//     </div>
//   );
// };

// export default PassengerDetailsPage;
