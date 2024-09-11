
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Main from './Components/Main.js';
import Test from './Components/Test.js';
import CardsPage from './Components/CardsPage/CardsPage.js';
export default function Game(){
  return(
    <Router>
        <div className='body-wrapper'>
        <Header />
        <Main>
        <Routes>
          <Route path="/" />
          <Route path="/about/" element={<Test />}/>
          <Route path="/items/" element={<CardsPage />}></Route>
        </Routes>
        </Main>
        <Footer />
        </div>
    </Router>
  )
}
