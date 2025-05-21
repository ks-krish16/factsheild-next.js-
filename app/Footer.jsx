import React from 'react'
import './Footer.css'

function Footer() {
  return (
    
      <div className="working">
            <h1 className="sectionTitle">How it works</h1>
            <div className="stepsContainer">
                <div className="step">
                    <div className="stepNumber">1</div>
                    <h3>Paste News</h3>
                    <p>Enter a news article or link.</p>
                </div>
                <div className="step">
                    <div className="stepNumber">2</div>
                    <h3>AI Analysis</h3>
                    <p>Our AI scans for misinformation.</p>
                </div>
                <div className="step">
                    <div className="stepNumber">3</div>
                    <h3>Get Results</h3>
                    <p>Receive a credibility score & report.</p>
                </div>
            </div>
            <h3 className="sectionTitle" >No caps just facts</h3><br/>
            <a href="addpost.html"><button className="start">Add a post</button></a><br/>
            <a href="post.html"><button className="start">View Our Community</button></a>
        </div>
    
  )
}

export default Footer
