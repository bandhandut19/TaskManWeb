
const Register = () => {
  return (
    <div className="hero  bg-purple-700 mt-5 py-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-yellow-300">Register Now!</h1>
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">

            <div className="form-control">
              <label className="label">
                  <span className="label-text">Enter Your Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Create a Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
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