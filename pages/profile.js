import React, { useState,useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header";

const Home = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [contact, setContact] = React.useState("");
    const getPosts = async() => {
      // const response = await fetch("http://localhost:3000/api/user");
    await axios.get('http://localhost:3000/api/user').then(async response => {
  console.log(response)
  console.log(response.data)
  let json=await response.data
 
  setName(json.name);
  setEmail(json.email);
  setContact(json.contact)
    })

    }
  
    if(!name)
      getPosts()
  
    return (
      <div>
        <Header/>
       {name?
          <div >
            {/* {let a=JSON.parse(posts);} */}
              <h2>Name: {name}</h2>
              <h2>Email: {email}</h2>
              <h2>Contact: {contact}</h2>
          </div>
        :<>Loading</>
       }        
      </div>
    )
  }
  
  export default Home;
  