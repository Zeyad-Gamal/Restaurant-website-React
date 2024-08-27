import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import styles from '../styles/style.css';
import logo from '../image/pngwing.com.png';
import background from '../image/ferks-guare-KEZdWfYD-ow-unsplash.jpg';

export default class Navbar extends Component {
  render() {
    return (
        <>
            <section className="header" style={{backgroundColor: 'transparent'}}>
                <a href="home.html" className="logo"><img src={logo} alt="" />
                </a>
            
                <nav className="navbar">
                    <a><Link className="nav-link" to='/'>Home</Link></a>
                    <a ><Link className="nav-link" to='products'>menu</Link></a>
                    <a  ><Link className="nav-link" to='make order'>Order</Link></a>
                    <a  ><Link className="nav-link" to='chiefs'>Chiefs</Link></a>
                    <a  ><Link className="nav-link" to='contact-us'>Contact-us</Link></a>
                </nav>
            
                <div id="menu-btn" className="fas fa-bars"></div>
            </section>
    
            {/* <section className="describtion">
                <h1 className="heading-title">Welcome to <span style={{color: '#f4510b'}}>BiteQuick</span></h1>
                <p style={{color: 'white', fontSize: '1.5rem', marginTop: '5rem'}}>Indulge in a culinary journey at Restaurant, where delectable flavors and impeccable service intertwine.<br />Discover our thoughtfully crafted menu, featuring locally sourced ingredients and tantalizing<br />creations. Experience the perfect blend of taste and ambiance, making every<br />visit an unforgettable dining experience.</p>
                <a href="" className="btn">Order now</a>
                <a href="" className="btn btnver2">Our menu</a>
            </section> */}


</>
    
    )
    
  }
}
