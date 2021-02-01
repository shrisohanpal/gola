import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import CreateShopScreen from './screens/CreateShopScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () =>
{
  return (
    <Router>
      <Header />
      <main style={{ marginTop: 50 }}>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/createshop' component={CreateShopScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App