import './Main.css'
import Lead from '../Lead/Lead'
import About from "../About/About";
import Technology from "../Technology/Technology";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Main({ isLogged, pageLogin }) {
  return (
    <main className="main">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <Lead />
      <About />
      {/* <Technology /> */}
      {/* <Student /> */}
      {/* <Portfolio /> */}
      {/* <Footer isLog={isLogged} /> */}
    </main>
  )
}

export default Main