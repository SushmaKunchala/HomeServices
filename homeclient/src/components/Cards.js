import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://media.gettyimages.com/photos/california-for-rent-real-estate-sign-picture-id172793963?k=20&m=172793963&s=612x612&w=0&h=OtiKbS8ei29oURuy65_8xl0-zmh25uNfiiTPEpjcJvs='
              text='LOOKING FOR A SWEETHOME! CLICK HERE >'
              label='Rental'
              path='/Rent'
            />
            <CardItem
              src='https://media.gettyimages.com/photos/full-length-of-construction-workers-analyzing-blueprints-in-the-picture-id961748068?k=20&m=961748068&s=612x612&w=0&h=6up4ViBFZXDFYMvN4j60_jOP6eJ3TlmSrI0iyIsp8aQ='
              text='LOOKING FOR HOUSE SERVICES! CLICK HERE >'
              label='Services'
              path='/services'
            />
            <CardItem
              src='https://media.gettyimages.com/photos/asia-tigers-group-employees-arrange-boxes-inside-a-shipping-container-picture-id1201734489?k=20&m=1201734489&s=612x612&w=0&h=UEHAkUrCKlYqn9AYhypmyhOF8_BgKcwy_vXHcgqWAqc='
              text='LOOKING FOR PACKERS&MOVERS ! CLICK HERE >'
              label='PM'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
