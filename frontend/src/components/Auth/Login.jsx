import { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/api/authApi.js";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Login = () => {


  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [login, {isLoading, isError, error, isSuccess}] = useLoginMutation();

  const navigate = useNavigate();


  useEffect(() => {
    // if user is already authenticated, go to home page
    
    // if any error occurs
    if(isError) {
      toast.error(error?.data?.message);
    }

    // if logged in successfully
    if(isSuccess) {
      toast.success('Login Successfull');
      navigate("/");
    }
  }, [isError, error, isSuccess, navigate])


  // on submitting the form (login)
  const handleSubmit = async (e) => {
    // prevent default behaviour
    e.preventDefault();

    // prepare the user authentication details
    const loginData = {
      email : userEmail,
      password : userPassword,
    }
    
    // call login function with authentication details
    await login(loginData)
  }

  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow rounded bg-body"
            onSubmit={handleSubmit}
          >
            <h1 className="mb-5 text-center ">Login</h1>
            <div className="mb-3">
              <label htmlFor="email_field" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password_field" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>

            <a href="/password/forgot" className="float-end mb-4">
              Forgot Password?
            </a>

            <button id="login_button" type="submit" className="btn w-100 py-2" disabled={isLoading} >
              { isLoading ? "Authenticating....." : "LOGIN" }
            </button>

            <div className="my-3">
              <a href="/register" className="float-end">
                New User?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
