import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../components/app/app'
import Home from '../components/home/home'
import Artists from '../components/artists/artists'
import Services from '../components/services/services'
import Gallery from '../components/gallery/gallery'
export default (
  <Route path='/' component={App}>
  <IndexRoute component={Home}/>
    <Route path='/artists' component={Artists}/>
    <Route path='/services' component={Services}/>
    <Route path='/gallery' component={Gallery}/>
  </Route>
)
