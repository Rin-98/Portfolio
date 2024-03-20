import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <section className='home-container'>
        <div className='home-content'>
            <h2>Building Website Experience That Inspire</h2>
            <p>Passionate Full Stack Developer | Transforming Ideas into Seamless and
               Visually Stunning Websites
            </p>
        </div>

        <div className='home-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./public/images/React.png" alt="" />
                </div>
                <img src="./public/images/anime.png" alt="" />
            </div>

            <div>
                <div className='tech-icon'>
                    <img src="./public/images/PHP.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./public/images/MySQL.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./public/images/Laravel.png" alt="" />
                </div>
                
            </div>
        </div>
    </section>
  );
}

export default Home;