import React from 'react'

const Register = () => {
  return (
   <>

    <div className="main">
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <div className="login-box">
                <h2>Register</h2>
                <form>
                    <div className="form-group">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        required
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Register
                    </button>
                </form>
    
                <div className="bottom-text">
                    Already have account? <a href="/">Login</a>
                    <div className="social">
                    <a href="#" className="facebook">
                        <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="#" className="google">
                        <i className="fab fa-google"></i> Google
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
   </>
  )
}

export default Register