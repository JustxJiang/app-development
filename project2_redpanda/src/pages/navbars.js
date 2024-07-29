import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/redpanda_logo.png'
const Navbars = function(){
    return(
        <>
            <nav className='navbar'>
                <img src = {logo} class = "logo"></img>
                <div class = "btngroup">
                    <button><Link style = {{textDecoration:'none'}} to = "/"><p>Home</p></Link></button>
                    <button><Link style = {{textDecoration:'none'}} to = "/about"><p>About us</p></Link></button>
                    <button><Link style = {{textDecoration:'none'}} to = "/contact"><p>Contact us</p></Link></button>
                </div>
            </nav>
        </>
    )

}

export default Navbars