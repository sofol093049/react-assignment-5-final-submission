import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


function Login() {const navigate=useNavigate();
    const {loginWithGoogle}=useContext(AuthContext);
    const {loginWithGithub}=useContext(AuthContext);
    const {userGeneralSign}=useContext(AuthContext);
    const handleGoogleLogin=()=>{
        loginWithGoogle().then(()=>{navigate("/");});
    }
    const handleGithubLogin =()=>{
      loginWithGithub().then(()=>{navigate("/");});
  }
  const handleGeneralLogin=(event)=>{
     event.preventDefault();
    const formData = new FormData(event.target);
   
    const email=formData.get('email');
    const password=formData.get('password');
    
 userGeneralSign(email,password);
 navigate("/");
};
  
    return (
        <div className="navbar_width mx-auto shadow-lg mt-2">
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleGeneralLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          
        </div>
        <div className="form-control mt-6">
          <button type="submit"  className="btn btn-primary">Login</button>
        </div>
        
        
      </form>
      <div className="flex flex-col mx-auto gap-2 w-80 ">
          <button onClick={handleGoogleLogin} className="btn btn-primary">Login With Google</button>
        
        
          <button onClick={handleGithubLogin}  className="btn btn-primary mt-4">Login With Github</button>
        
          </div>
          <div className="flex flex-row mt-4 p-5 mx-auto gap-2">
        <span className="p-3 text-fuchsia-400">Don't hava an account!</span>  <Link to="/register"> <button  className="btn btn-primary ">Register</button></Link>
        </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Login;