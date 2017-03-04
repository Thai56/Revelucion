import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import paths from './paths'
export default (
  <Route path='/' component={paths.App}>
  <IndexRoute component={paths.Home}/>
    <Route path='/artists' component={paths.Artists}/>
    <Route path='/services' component={paths.Services}/>
    <Route path='/gallery' component={paths.GalleryContainer}/>
    <Route path='/products' component={paths.ProductContainer}/>
    <Route path='/directions' component={paths.DirectionsContainer}/>
    <Route path='/admin' component={paths.Admin}/>
    <Route path='/admin/edit' component={paths.AdminEdit}/>
    <Route path='/admin/edit/employee/:id' component={paths.Employee}/>
    <Route path='/admin/edit/profile/:id' component={paths.EditProfile}/>
  </Route>
)
