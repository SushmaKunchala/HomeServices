import React, { useState } from "react";
import {Modal,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";


function Login()
{   
  const [loginstatus,setloginstatus]=useState(false);
    function check()
    {
        const email=document.getElementById("email").value;
        const password=document.getElementById("pwd").value;
       
          axios.get("http://localhost:5000/login/"+email+"/"+password).then(response=>{
           
            if(response.data===false)
            {
              console.log("User doesnot exists");
            }
            else
            {
              console.log("user exists");
            }
            
            }).catch(err=>{
              console.log(err);
            });
    }
    ///console.log(loginstatus);
    return <Modal show={true}>
  <Modal.Header >
    <Modal.Title >Login</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <form className="mt-4" onSubmit={()=>{check()}}>
    <div className="form-group">
    <input className="form-control" name="email" id="email" type="email" placeholder="Enter your email" required ></input>
    </div>
    <div className="form-group"> 
    <input className="form-control" name="pwd" id="pwd" type="password" placeholder="Enter your password" required></input>
    </div>
    <Link to="/"><Button variant="secondary">Close</Button></Link>
    <Button type="submit"  variant="success">Login</Button>
    </form>

  </Modal.Body>

</Modal>;

}
export default Login;
