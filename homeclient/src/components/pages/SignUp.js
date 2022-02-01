import React from 'react';
import {Modal,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios  from "axios";

function insert()
{
  var user={
    fname:document.getElementById("fname").value,
    lname:document.getElementById("lname").value,
    mobile_number:document.getElementById("mnum").value,
    dob:document.getElementById("dob").value,
    email:document.getElementById("email").value,
    password:document.getElementById("pwd").value

  }
            
            axios.post("http://localhost:5000/signup/",user)
            .then(function(data) {
              console.log(data);
           })
           .catch(function(error) {
              console.log(error);
           });
}
function SignUp()
{

    function check(){
      const mob_num=document.getElementById("mnum").value;
      const email=String(document.getElementById("email").value);
    
      axios.get("http://localhost:5000/users/"+mob_num+"/"+email).then(response=>{
        if(response.data===true)
        {
          console.log("User exists");
        }
        else
        {
          if(document.getElementById("pwd").value===document.getElementById("cpwd").value)
          {
            insert();
          }
          else
          {
            console.log("Enter correct password");
          }
          
        }
          
        }).catch(err=>{
          console.log(err);
        })
     
    }


    return <Modal show={true}>
      <Modal.Header >
      <Modal.Title >Signup</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form className="mt-4" onSubmit={()=>{check()}} action="/" >
    <div className="form-group">
    <input className="form-control" name="fname" id="fname" type="text" placeholder="Enter your first Name" required minLength="3" maxLength="25"></input>
    </div>
    <div className="form-group"> 
    <input className="form-control" name="lname" id="lname" type="text" placeholder="Enter your last Name" required minlength="3" maxlength="25"></input>
    </div>
    <div className="form-group">
    <input className="form-control" name="mnum" id="mnum" type="text" placeholder="Enter your mobile number" required pattern="[0-9]{10}" ></input>
    </div>
    <div className="form-group">
    <input className="form-control" name="dob" id="dob" type="date" placeholder="Enter your Date of birth" required ></input>
    </div>
    <div className="form-group">
    <input className="form-control" name="email" id="email" type="Email" placeholder="Enter your Email" required></input>
    </div>
    <div className="form-group">
    <input className="form-control" name="pwd" id="pwd" type="password" placeholder="Enter a password" required minlength="6"></input>
    </div>
    <div className="form-group">
    <input className="form-control" name="cpwd" id="cpwd" type="password" placeholder="Confirm Password" required minlength="6"></input>
    </div>
    <Link to="/"><Button variant="secondary">Close</Button></Link>
      <Button  type="submit"  variant="success">Signup</Button>
    </form>
    </Modal.Body>
  </Modal>;
  
}

export default SignUp;

