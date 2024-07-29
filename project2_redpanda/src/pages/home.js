import React from 'react';
import cover from '../images/redpandacover.jpg'
import Card from '../card'

const Home = function(){
    return(
        <>
        <img src = {cover}/>
        <h1 class = "title">Explore Red Pandas!</h1>

        {/* cards */}
        <section className='cardcontainer'>
          <Card title = "Origin"/>
          <Card title = "Fun Facts"/>
          <Card title = "Current Status"/>

        </section>
      </>
    )
}

export default Home