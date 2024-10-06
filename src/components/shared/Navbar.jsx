import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

function Navbar() {
  var {user,logOutUser,user_g}=useContext(AuthContext);
  if(user!=null)
 if(user.displayName==null){
 user.displayName=user.email;
 user.photoURL=`https://i.ibb.co.com/4KfXBM7/np.png`
 }
  console.log("user:",user);
  console.log("user_g:",user_g);
  const navigate=useNavigate();
  const handleLogout=()=>{
    logOutUser();
    navigate("/");
  }
    return (
        <div className="navbar_width mx-auto shadow-lg mt-2">
            <div className="navbar bg-orange-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><Link to="/">𝓗𝓸𝓶𝓮</Link></li>
        
      <li>
        <span>𝓐𝓫𝓸𝓾𝓽</span>
      </li>
      <li>
        <span>𝓑𝓵𝓸𝓰</span>
      </li>
      <li><Link to="/faq/">𝓕𝓪𝓺</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span><img className="h-12 rounded-lg " src="https://i.ibb.co.com/L1HRQz7/Untitled.jpg" alt="logo-no-background" border="0"/></span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className=""><Link to="/">𝓗𝓸𝓶𝓮</Link></li>
      <li>
        <Link to="/aboutus/"> <span>𝓐𝓫𝓸𝓾𝓽 𝓤𝓼</span></Link>
       
      </li>
      <li>
        <Link to="/contactus/"><span>𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓤𝓼</span></Link>
        
      </li>
      <li><Link to="/faq/">𝓗𝓸𝔀 𝓘𝓽 𝓦𝓸𝓻𝓴𝓼</Link></li>
      
      
    </ul>
  </div>
  <div className="navbar-end ">
    <div className="flex flex-row ">
      
     
      
      {user?(<div className="flex flex-col-reverse items-center font-serif "><span className="font-mono text-center font-[10]">
        {user.displayName}</span><img className="w-10 rounded" src={user?.photoURL}>
        </img></div>):(<span className="grid grid-cols-2 gap-2 items-center font-semibold font-mono">Hi!Buddy.</span>)}

        {/* {user_g?(<div className=" font-serif "><p className="font-mono mt-4 font-[10]">{user_g.email}</p>
          </div>):(<span className="grid grid-cols-2 gap-2 items-center font-semibold font-mono"></span>)} */}
   
    {user?(<a onClick={handleLogout} className="btn  ml-2 text-lg ">𝓢𝓲𝓰𝓷 𝓞𝓾𝓽</a>):(<Link to="login"><a className="btn  ml-2 ">𝚂𝚒𝚐𝚗 𝙸𝚗</a></Link>)}
    
    </div>
    
  </div>
</div>
        </div>
    );
}

export default Navbar;