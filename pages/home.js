import React from "react";
import Header from "./components/Header";
import Link from "next/link";
function HomePage(props) {
  return (
    <section className="home">
    <Header/>
      <p>
        
        <a href="https://starwars.fandom.com/wiki/The_Mandalorian">here</a>
      </p>
    
    </section>
  );
}

export default HomePage;