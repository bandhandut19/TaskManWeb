
const Register = () => {

  const handleRegister=(e)=>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    const userInfos = {
      name,email,password
    }
    console.log(userInfos)
  }


  return (
    <div className="lg:hero bg-purple-700 mt-5 py-10">
      <div className=" lg:hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl text-2xl font-bold text-yellow-300">Register Now!</h1>
        </div>

        <div className="m-10 lg:p-10 py-5 px-2 w-4/5 shadow-2xl bg-base-100">
          <form onSubmit={handleRegister}>

            <div className="form-control mb-5">
              <label className="label">
                  <span className="label-text">Enter Your Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>

            <div className="form-control mb-5">
              <label className="label">
                  <span className="label-text">Enter Your Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Create a Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary bg-purple-700 text-yellow-300 hover:bg-purple-700">Register Now</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;