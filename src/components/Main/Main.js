import './Main.css'
import Lead from '../Lead/Lead'
import About from "../About/About";
import Technology from "../Technology/Technology";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return(
    <main className="main">
      <Lead/>
      <About/>
      <Technology/>
      <Student/>
      <Portfolio/>
    </main>
  )
}

export default Main