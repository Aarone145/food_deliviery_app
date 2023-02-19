import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetails'
import CartList from '../pages/CartList'
import Login from '../pages/Login' 
import Register from '../pages/Register'
import CheckOut from '../pages/CheckOut'

const Routers = () => {
  return (
    <Switch>
        <Route exact path='/'><Login /></Route>
        <Route path='/home'><Home /></Route>
        <Route path='/allfoods'><AllFoods /></Route>
        <Route path='/FoodDetails'><FoodDetails /></Route>
        <Route path='/checkout'><CheckOut /></Route>
        <Route path='/Cart'><CartList /></Route>
        <Route path='/Login'><Login /></Route>
        <Route path='/Register'><Register /></Route>
    </Switch>
  )
}

export default Routers
