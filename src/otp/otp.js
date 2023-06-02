
import './otp.css'
import { useState } from 'react';
// import { useRef } from 'react';
function Otp(){
  const [value,setValue]=useState('');
  function handleChange(event){
    const inputValue=event.target.value.replace(/\D/g,'');//remove non numeric character
    setValue(inputValue)
  }

  // const input1Ref = useRef(null);
  // const input2Ref = useRef(null);
  // const input3Ref = useRef(null);
  // const input4Ref = useRef(null);
  // const handleInputChange = (event, refToFocus) => {
  //   const inputLength = event.target.value.length;
   

  //   if (inputLength===1) {
  //     refToFocus.current.focus();
  //   }
  // };
    return(
        <div className="body">
        <div className="container">
    <h2>Payment OTP Verification</h2>
    <p>Please enter the OTP sent to your registered mobile number.</p>
    <div className="otp-input-container">
      {/* <input 
      type="number" 
      maxlength="1" 
      pattern="\d" 
      required  
      ref={input1Ref}
      onChange={(event) => handleInputChange(event, input2Ref)}
/>
      <input 
      type="number" 
      maxlength="1" 
      pattern="\d" 
      required             
      ref={input2Ref}
      onChange={(event) => handleInputChange(event, input3Ref)}
></input>
      <input 
      type="number" 
      maxlength="1" 
      pattern="\d" 
      required             
      ref={input3Ref}
      onChange={(event) => handleInputChange(event, input4Ref)}
/>
      <input 
      type="number" 
      maxlength="1" 
      pattern="\d" 
      required 
      ref={input4Ref} 
      
></input> */}
 <input 
      type="text" 
      maxlength={6}
      value={value}
      onChange={handleChange}
      required/>
    </div>
    <div className="otp-resend-container">
      <p>Didn't receive the OTP? <a href=" ">Resend OTP</a></p>
    </div>
    <div className="otp-button-container">
      <button type="submit">Verify</button>
    </div>
  </div>
  </div>
    )
}

export default Otp;