import React, { Component } from 'react'

import Orderc from '../Ordercomponentc/Orderc'
import logo from '../image/pngwing.com.png';
import background from '../image/pexels-life-of-pix-67468.jpg';
export default class Orderp extends Component {


  render() {
    return (
  <>







<section className="review">
            <div className="form">
                <form action="" method="post" className="review-form">
                    <div className="flex">
                        <div className="inputBox">
                            <span>name :</span>
                            <input type="text" placeholder="enter your name" name="name" required />
                        </div>

                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="enter your email" name="email" />
                        </div>

                        <div className="inputBox">
                            <span>phone :</span>
                            <input type="number" placeholder="enter your phone" name="phone" required />
                        </div>

                        <div className="inputBox">
                            <span>the meal :</span>
                            <select required>
                                <option value="">ll</option>
                                <option value="">bb</option>
                            </select>
                        </div>

                        <div className="inputBox">
                            <span>adds :</span>
                            <select>
                                <option value="">ll</option>
                                <option value="">bb</option>
                            </select>
                        </div>

                        <div className="inputBox">
                            <span>drinks :</span>
                            <select>
                                <option value="">ll</option>
                                <option value="">bb</option>
                            </select>
                        </div>

                        <div className="inputBox">
                            <span>Note :</span>
                            <textarea className="form-control" id="review" rows="5" placeholder="Enter your notes" />
                        </div>
                    </div>
                    <input type="submit" value="submit" className="btn" name="send" />
                </form>
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


