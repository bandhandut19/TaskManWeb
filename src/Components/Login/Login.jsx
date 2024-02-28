
import { getAuth } from "firebase/auth";
import app from '../../../firebase.config';
import { Link , useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const auth = getAuth(app) 


const Login = () => {
 
    const {userInfo}=useContext(AuthContext)
    const {loginUser,setUser} = userInfo
    const navigate = useNavigate()
    const [error,setError] = useState()

  const handleLogin=(e)=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    
    loginUser(email,password)
    .then((res)=>{
        const user = res.user
        setUser(user)
        navigate('/')
    })
    .catch((error)=>{
        setError(error.message)
    })
    console.log(error) // will use toast later

    


    form.reset()
  }


  return (
    <div className="lg:hero bg-purple-700 mt-5 py-10">
      <div className=" lg:hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl text-2xl font-bold text-yellow-300">Login Now!</h1>
        </div>

        <div className="m-10 lg:p-10 py-5 px-2 w-4/5 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>

           

            <div className="form-control mb-5">
              <label className="label">
                  <span className="label-text">Enter Your Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary bg-purple-700 text-yellow-300 hover:bg-purple-700">Login</button>
              <div className="text-center">
              <h1 className="py-2">New Here ? <br /><Link to='/register' className="bg-purple-700 ml-1 px-2 py-1 text-white">Register Now!</Link></h1>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;