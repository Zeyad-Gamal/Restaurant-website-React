import React, { Component } from 'react'

import ChiefschildComponent from '../ChiefschildComponent/ChiefschildComponent'
import background from '../image/pexels-life-of-pix-67468.jpg';

export default class Chiefs extends Component {



  render() {

    return (
  <>


        
<div className="up" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: '62rem'}}>


</div>




<section className="packages" id="food"  >
            <h1 className="heading-title">food</h1>
            <div className="box-container">
                {/* Box 1 */}
                <div className="box">
                    <div className="image" style={{width:'39rem',height:'34rem'}}>
                        <img src={require("../image/chief1.png")} alt="" style={{width:'100%',height:'100%'}} />
                    </div>
                    <div className="content">
                        <p style={{marginTop:'5rem'}}>Chief 1</p>
                       
                    </div>
                </div>

                {/* Box 2 */}
                <div className="box">
                    <div className="image" style={{width:'39rem',height:'34rem'}}>
                        <img src={require("../image/chief2.png")} alt="" style={{width:'100%',height:'100%'}}  />
                    </div>
                    <div className="content">
                        <p style={{marginTop:'5rem'}}>Chief 2</p>

                    </div>
                </div>

                <div className="box">
                    <div className="image" style={{width:'39rem',height:'34rem'}}>
                        <img src={require("../image/chief3.png")} alt="" style={{width:'100%',height:'100%'}}  />
                    </div>
                    <div className="content">
                        <p style={{marginTop:'5rem'}}>Chief 3</p>

                    </div>
                </div>


            </div>
        </section>



<section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>quick links</h3>
                    <a href="home.html"> <i className="fas fa-angle-right"></i>home</a>
                    <a href="about.html"> <i className="fas fa-angle-right"></i>menu</a>
                    <a href="package.html"> <i className="fas fa-angle-right"></i>order</a>
                </div>

                <div className="box">
                    <h3>extra links</h3>
                    <a href="#"> <i className="fas fa-angle-right"></i>about</a>
                    <a href="#"> <i className="fas fa-angle-right"></i>branches</a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"> <i className="fas fa-phone"></i>+123-456-7890</a>
                    <a href="#"> <i className="fab fa-whatsapp"></i>+111-222-3333</a>
                    <a href="#"> <i className="fas fa-envelope"></i>adsffds@gmail.com</a>
                    <a href="#"> <i className="fas fa-map"></i>Egypt</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
                    <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                    <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
                    <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
                </div>
            </div>

            <div className="credit"> created by <span> web designer</span> | all rights reserved!</div>
        </section>
      </>
    )
  }
}


