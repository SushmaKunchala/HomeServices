import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useEffect, useState } from "react";
import axios from "axios";
import {Row ,Col} from "react-bootstrap";


function setCard(obj)
{
  return  <Col lg={3} md={4} sm={6} className="card_items mb-5"><CardItem
  src={obj.image}
  text={obj.name}
  label='Services'
  path={`/Option/${obj.cname}`}
/>
</Col>
}
function ServiceCards() {
  const [services,setServices]=useState([]);
  
    useEffect(async()=>{
        try{
            const data1= await axios.get("http://localhost:5000/getservices");
            setServices(data1.data);
        }
        catch(error)
        {
            console.log(error)
        }
    },[])

  return (
      <>
    <div className='cards'>
      <h1>Choose a service to get started.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
       <Row>{services.map(setCard)}</Row> 
        </div>
      </div>
    </div>
    
    </>
  );
}

export default ServiceCards;
