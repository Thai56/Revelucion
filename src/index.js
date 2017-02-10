import React , {Component} from 'react'
import {render} from 'react-dom'
import {Router, hashHistory, Route} from "react-router"
import routes from './routes/routes'
render (
  <Router history={hashHistory} routes={routes}/>
  ,document.getElementById('app')
)
