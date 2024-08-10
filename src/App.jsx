import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Warranty from './components/warranty/Warranty'
import Care from './components/care/Care'
import Cashback from './components/cashback/Cashback'
import MasterCard from './components/masterCard/MasterCard'
import NoFees from './components/nofees/NoFees'
import Account from './components/account/Account'
import Creation from './components/creation/Creation'

function App() {

  return (
    <div className='App'>
      <Header />
      <main>
        <Home />
        <Warranty />
        <Care />
        <Cashback />
        <MasterCard />
        <NoFees />
        <Account />
        <Creation />
      </main>
      <Footer />
    </div>
  )
}

export default App
