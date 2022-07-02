import React, { useState } from "react";

function Signup(){
  const [passwordMatch, setPasswordMatch] = useState(null)

  const handleSignup = (event) => {
    event.preventDefault()
    
    if (event.target[4].value === event.target[5].value){
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  }

  return(
    <div className="py-5 px-3 vh-100" style={{background: "#454545"}}>
      <div className="row d-flex justify-content-center">
        <div className="col d-flex justify-content-center mb-4">
          <h2 style={{color: "white"}}>Sign Up</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col d-flex justify-content-center mb-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(event) => handleSignup(event)}>
                <div className="row my-3">
                  <div className="col">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" maxLength={50} required/>
                  </div>
                  <div className="col">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" maxLength={50} required/>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col">
                    <label className="form-label">User Name</label>
                    <input type="text" className="form-control" placeholder="johndoe123" aria-label="User Name" maxLength={50} required/>
                  </div>
                  <div className="col">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="example@provider.com" aria-label="Email Address" maxLength={100} required/>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="*****" aria-label="password" minLength={8} maxLength={50} required/>
                  </div>
                  <div className="col">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="*****" aria-label="Confirm Password" minLength={8} maxLength={50} required/>
                  </div>
                </div>
                <div className="row mt-3 px-2">
                  {passwordMatch === null ? null : passwordMatch ? null: <p className="text-danger">Passwords do not match</p>}
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
