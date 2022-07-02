import React from "react";

function Login(){
  const handleLogin = (event) => {
    event.preventDefault()
  }

  return(
    <div className="py-5 px-3 vh-100" style={{background: "#454545"}}>
    <div className="row d-flex justify-content-center">
      <div className="col d-flex justify-content-center mb-4">
        <h2 style={{color: "white"}}>Login</h2>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
      <div className="col d-flex justify-content-center mb-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={(event) => handleLogin(event)}>
              <div className="row my-3">
                <div className="col">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control" placeholder="johndoe123" aria-label="User Name" maxLength={50} required/>
                </div>
                <div className="col">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="password" aria-label="Last name" minLength={8} maxLength={50} required/>
                </div>
              </div>
              <div className="row mt-3 px-2">
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

export default Login