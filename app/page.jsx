import Image from "next/image";
import styles from "./page.module.css";
import Nav from './nav.jsx';
import Titlebox from './Titlebox.jsx'
import Features from './Features.jsx'
import Footer from './Footer.jsx'
import './page.css'

export default function Home() {
  return (
    <div className="main">
      <Nav/>
      <Titlebox/>
      <Features title="AI-Powered Verification" msg="Detects misinformation using AI"/>
      <Features title="Fact-Checked Sources" msg="Cross-references trusted databases"/>
      <Features title="Community Reporting" msg="Users can flag misleading content."/>
      <Features title="Deep Analysis" msg="Detects bias and fake claims in news articles"/>
      <Footer/>
    </div>
    
  );
}
