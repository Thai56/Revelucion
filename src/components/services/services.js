import React , {Component} from 'react'
import serviceData from './serviceData'
import '../../styles/service.scss'
function Service(props){
    return (
      <div className="service-wrapper">
        <ul style={{listStyleType:"circle",margin:"auto"}}>
          <li><div>service: {props.service.name}</div>
              <div>desc: {props.service.notes}</div>
              <div>$ {props.service.price / 100}</div></li>
        </ul>
      </div>
    )
}

export default function Services(props){
    return (
      <div id='services-container'>
        <header>
          <div className='services-header-title'>
            Services
          </div>
        </header>
        <section className='artist-service-container'>
          <span className='artist-name'>Esau</span>
          {serviceData.esauServices.map((serv,i) => {
            return (
              <Service
                key = {i}
                service = {serv}
                />
            )
          })}
        </section>
        <section className='artist-service-container'>
          <span className='artist-name'>Chipi</span>
          {serviceData.chipiServices.map((serv,i) => {
            return (
              <Service
                key = {i}
                service = {serv}
                />
            )
          })}
        </section>
        <section className='artist-service-container'>
          <span className='artist-name'>Tattoos</span>
          {serviceData.tattooServices.map((serv,i) => {
            return (
              <Service
                key = {i}
                service = {serv}
                />
            )
          })}
        </section>
      </div>
    )
}
