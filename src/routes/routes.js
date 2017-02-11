import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../components/app/app'
import Home from '../components/home/home'
import Artists from '../components/artists/artists'
import Services from '../components/services/services'
import Gallery from '../components/gallery/gallery'
import Admin from '../components/admin/admin'
import AdminEdit from '../components/admin/edit'
export default (
  <Route path='/' component={App}>
  <IndexRoute component={Home}/>
    <Route path='/artists' component={Artists}/>
    <Route path='/services' component={Services}/>
    <Route path='/gallery' component={Gallery}/>
    <Route path='/admin' component={Admin}/>
    <Route path='/admin/edit' component={AdminEdit}/>
  </Route>
)
