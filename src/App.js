import './App.css';
import Header from './component/Header';
import NavBar from './component/Nav';
import Profile from './pages/About';
import Experience from './pages/Experience';
import Footer from './component/Footer/footer';
import Projects from './pages/MyWork';
import ContactUs from './pages/Contact';
function App() {
  return(
<>
<Header/>
<NavBar/>
<Profile/>
<Experience/>
<Projects/>
<ContactUs/>
<Footer/>
</>

);
}

export default App;
