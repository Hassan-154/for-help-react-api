import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import { MdMenu } from 'react-icons/md';

function SideNav() {
    
    //to control menu icon
    const [menu, setmenu] = useState(true)
    const Menu=()=> setmenu(!menu)
    console.log()
    return (
        <>
        <div className="menu-icon-container" onClick={Menu}>
        {menu ? <MdMenu size="55"/> : <MdMenu size="55"/>}
        </div>
        <div  className={menu ? "navbar-container" : "navbar-container-mobile"}>
            <ul>
                <li>
                    <NavLink
                    className="nav-link"
                    to="/"
                    ><a>Gallery1</a></NavLink>
                </li>
                <li>
                    <NavLink
                    className="nav-link"
                    to="/gallery2"
                    ><a>Gallery2</a></NavLink>
                </li>
                <li>
                    <NavLink
                    className="nav-link"
                    to="gallery3"
                    ><a>Gallery3</a></NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default SideNav
