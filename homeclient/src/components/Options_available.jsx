import React from "react";
import {useState,useEffect} from "react";
import {Button, Col, Row} from "react-bootstrap";
import Service_option from "./Service_option";
import { useParams } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter";

function createServiceCard(service_card)
{
    return <Col sm={12} lg={6}><Service_option name={service_card.name} rating={service_card.rating} cost={service_card.cost} time={service_card.time} details={service_card.details} image={service_card.image} /></Col>;
}
function Options_available()
{
    
    const params=useParams();
    const [servicecard,setServiceCard]=useState([]);
    useEffect(async()=>{
        try{
            const data1= await axios.get("http://localhost:5000/getService/"+params.cname);
            setServiceCard(data1.data);
        }
        catch(error)
        {
            console.log(error)
        }
    },[])
    /*function getData(){
        axios.get('http://localhost:5000/getService/'+params.cname).then(response=>{
          setServiceCard(response.data);
        }).catch(err=>{
          console.log(err);
        })
      }
  /*  async function getData()
    {
        try{
            const data1= await axios.get("http://localhost:5000/getService/"+params.cname);
            console.log(data1.data);
            console.log("yes");
            setServiceCard(data1.data);
            console.log("yes1");
            console.log(servicecard);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(()=>{
        console.log("came1");
        getData();
    },[]);*/
    
    return <div >
           
            <Row className="mt-5">
                <Col lg={1}></Col>
                <Col  lg={8} className="Scroll"><Row >{servicecard.map(createServiceCard)}</Row></Col>
                <Col  lg={2}> <Filter name={params.name} cost={params.cost} show={params.val} /> </Col>
                <Col lg={1}></Col>
            </Row>
        
    </div>
}


export default Options_available;