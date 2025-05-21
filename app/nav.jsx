
import Link from 'next/link'
import React from 'react'
import './nav.css';


function Nav() {
  return (
    <>
    <nav>
           <span className="logo" >
                    <h1>FactShield</h1>
                </span>
                <div className='navLinks'>
                    
                    <div className="menu" id="navMenu">
                        <Link href="addpost.html">add a post</Link>
                        <Link href="post.html">Community</Link>
                        <Link href="/signup">Sign Up</Link>
                        <Link href="/verify"><button>Get Started</button></Link>
                        
                    </div>
               
                </div>
    </nav>
    
    </>
  )
}

export default Nav
