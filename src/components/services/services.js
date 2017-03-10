import React from 'react';
import Linkify from 'react-linkify';
import serviceData from './serviceData';
import '../../styles/service.scss';

function Service(props) {
    return (
      <div className="service-wrapper">
        <ul style={{ listStyleType: 'none', margin: 'auto' }}>
          <li><div>({ props.service.id }) <u>{props.service.name}</u> $ {props.service.price / 100}{props.service.up ? props.service.up : null}</div>
              <div className='notes'>{props.service.notes} {props.service.insta ? <Linkify><a href={props.service.insta}>theboxcarkidd</a></Linkify> : null}</div>
              <div>{props.deposit ? props.deposit : null}</div>
              <div>{props.service.time ? <div>{props.service.time} minutes</div> : null}</div>
              <div>{props.service.perHour ? props.service.perHour : null} </div>
          </li>
        </ul>
      </div>
    );
}

export default function Services() {
    return (
      <div id='services-container'>
        <header>
          <div className='services-header-title'>
            Services
          </div>
        </header>

        <div className="service-container-wrapper">
          <section className='artist-service-container'>
            <span className='artist-name'>E’sau</span>
            {serviceData.esauServices.map((serv, i) =>
               <Service key={i} service={serv} />
            )}
          </section>
          <section className='artist-service-container'>
            <span className='artist-name'>Chipi</span>
            {serviceData.chipiServices.map((serv, i) =>
                <Service
                  key={i}
                  service={serv}
                />
            )}
          </section>
          <section className='artist-service-container'>
            <span className='artist-name'>Tattoos</span>
            {serviceData.tattooServices.map((serv, i) =>
                <Service
                  key={i}
                  service={serv}
                  deposit={'$50 Deposit'}
                />
            )}
          </section>
        </div>

      </div>
    );
}
