'use client'
import React from 'react'
import './verify.css'
import Nav from '../nav.jsx'

function page() {
    async function analyzeNews() {
            const newsText = document.getElementById("newsInput").value;
            if (!newsText) {
                alert("Please enter a news headline or text.");
                return;
            }

            const scoreCard = document.getElementById("scoreCard");
            const scoreValue = document.getElementById("scoreValue");
            const scoreMessage = document.getElementById("scoreMessage");

            scoreCard.classList.add("hidden");
            scoreValue.innerText = "Analyzing...";
            scoreMessage.innerText = "";

            // Simulating an API call
            setTimeout(() => {
                const score = Math.floor(Math.random() * 101);
                scoreValue.innerText = score + "%";

                let message = "";
                if (score > 75) {
                    message = "Highly Reliable - This news appears to be true";
                    scoreCard.className = "score-card reliable";
                } else if (score > 50) {
                    message = "Partially Reliable - Some sources confirm it, but further verification is recommended";
                    scoreCard.className = "score-card partial";
                } else {
                    message = "Likely Fake - This news has strong indicators of misinformation";
                    scoreCard.className = "score-card unreliable";
                }

                scoreMessage.innerText = message;
                scoreCard.classList.remove("hidden");
            }, 2000);
        }
  return (
    <>
    <Nav/>
    <div>
              <div className="verifyContainer">
            <div className="verifyHeader">
                <h2>Check News Credibility</h2>
                <p>Enter a news headline, text, or link below to analyze its authenticity</p>
            </div>

            <div className="inputSection">
                <textarea id="newsInput" rows="4" placeholder="Paste news article or URL here..."></textarea>
                <button onClick={analyzeNews} className="analyzeBtn">
                    <span className="btnText">Analyze News</span>
                    <div className="btnShine"></div>
                </button>
            </div>

        
            <div id="scoreCard" className="scoreCardHidden">
                <div className="scoreHeader">
                    <div className="shieldIcon">
                        <div className="shield">
                            <div className="shieldInner"></div>
                        </div>
                    </div>
                    <h3>Credibility Score</h3>
                    <p>AI-based analysis of the news' authenticity</p>
                </div>
                
                <div className="scoreDisplay">
                    <div className="scoreRing">
                        <div id="scoreValue" className="scoreValue">--%</div>
                    </div>
                </div>
                
                <p id="scoreMessage" className="scoreMessage"></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default page
