import React from "react";
import Header from "./components/Header";
import Link from "next/link";
import useSWR from 'swr'
import Product from '../components/Bid'

const fetcher = (url) => fetch(url).then((res) => res.json())
function Dashboard(props) {
    const { data, error } = useSWR('/api/product', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  
  return (
    <section className="home">
    <Header/>
    <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {data.map((p, i) => (
        <Product key={i} product={p} />
      ))}
      </div>
      </div>
      </div>
   
    </section>
  );
}

export default Dashboard;