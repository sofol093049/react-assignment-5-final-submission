import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {  useNavigate } from "react-router-dom";



function Register() {const navigate=useNavigate();
    const {createUser}=useContext(AuthContext);
    const handleGeneralRegister=(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const name=formData.get('name');
        const email=formData.get('email');
        const password=formData.get('password');
        const photo=formData.get('photo');
        console.log(name,email,password,photo);
       
       createUser(email,password);
       navigate("/");
      //  then(()=>{navigate("/");});
    }
    return (
        <div className="navbar_width mx-auto shadow-lg mt-2">
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleGeneralRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo</span>
          </label>
          
          <input  name="photo" placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button type="submit"  className="btn btn-primary ">Register</button>
        </div>
        
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
}

export default Register;