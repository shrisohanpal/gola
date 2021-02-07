import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'

import CategoryListScreen from './screens/CategoryListScreen'
import CategoryEditScreen from './screens/CategoryEditScreen'

import ShopListScreen from './screens/ShopListScreen'
import ShopDetailsScreen from './screens/ShopDetailsScreen'
import ShopEditScreen from './screens/ShopEditScreen'

const App = () =>
{
  return (
    <Router>
      <Header />
      <main style={{ marginTop: 50 }}>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />

        <Route path='/shop/:id' component={ShopDetailsScreen} exact />
        <Route path='/shop/:id/edit' component={ShopEditScreen} />

        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id' component={UserEditScreen} />

        <Route path='/admin/categorylist' component={CategoryListScreen} />
        <Route path='/admin/category/:id' component={CategoryEditScreen} />

        <Route path='/admin/shoplist' component={ShopListScreen} />
        <Route path='/admin/shop/:id' component={ShopEditScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App