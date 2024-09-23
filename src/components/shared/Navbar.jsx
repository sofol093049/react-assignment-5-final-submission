import { Link } from "react-router-dom";

function Navbar() {
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
      <li><a>𝓕𝓪𝓺</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span><img className="h-12" src="https://i.ibb.co.com/3MZf1wK/logo-no-background.png" alt="logo-no-background" border="0"/></span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className=""><Link to="/">𝓗𝓸𝓶𝓮</Link></li>
      <li>
        <span>𝓐𝓫𝓸𝓾𝓽</span>
      </li>
      <li>
        <span>𝓑𝓵𝓸𝓰</span>
      </li>
      <li><Link to="/faq/">𝓕𝓪𝓺</Link></li>
      
      
    </ul>
  </div>
  <div className="navbar-start ">
    <div className="button_margin ">
    <a className="btn ">𝙱𝚞𝚢 𝙱𝚘𝚘𝚔𝚜</a>
    <a className="btn  ml-2 ">𝚂𝚒𝚐𝚗 𝙸𝚗</a>
    </div>
    
  </div>
</div>
        </div>
    );
}

export default Navbar;