
import './otp.css'
function Otp(){
    return(
        <div className="body">
        <div className="container">
    <h2>Payment OTP Verification</h2>
    <p>Please enter the OTP sent to your registered mobile number.</p>
    <div className="otp-input-container">
      <input type="text" maxlength="1" pattern="\d" required></input>
      <input type="text" maxlength="1" pattern="\d" required></input>
      <input type="text" maxlength="1" pattern="\d" required></input>
      <input type="text" maxlength="1" pattern="\d" required></input>
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