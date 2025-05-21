import React from 'react'
import './Titlebox.css'
import Link from 'next/link'

function Titlebox() {
  return (
  <>
    <div className="txtBox">
        <h1 className="heroTitle">Don't Be Fooled.<br/>Be Informed.</h1>
        <h3 className="heroSubtitle">AI-Powered Truth Detection at Your Fingertips</h3>
        <Link href="/verify"><button className="start">Get Started Now</button></Link>
     </div>
  </>
  )
}

export default Titlebox
