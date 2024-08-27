import React, { Component } from 'react'

import Contactc from '../Contactcf/Contactc'
import logo from '../image/pngwing.com.png';
import background from '../image/pexels-life-of-pix-67468.jpg';
export default class Contactp extends Component {


  render() {
    return (
  <>

<div className="up" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: '62rem'}}>


            </div>

{/* <child productInfo={this.state.products[0]} */}

<section>
    <h1 className='contact-title'>Contact-Us</h1>
    <p className='contact-paragraph'>As the first Thai restaurant in Calvert County, we strive to provide the best Thai food paired with out-of-this-world customer service. We want to share the Thai culture with our family, friends, and community, by offering healthy Thai food options for everyone. If you have any questions about our Thai food menu or would like to express any concerns, please feel free to reach out to our team. We would be more than happy to help!</p>
<div style={{display:'flex',flexDirection:'column',gap:'2.4rem'}}>
    <div>
        <h5 className='contact-address'>Phone:</h5>
        <h5 className='contact-child'>(443) 975-7477</h5>
        <h5 className='contact-child'>(443) 975-7477</h5>
    </div>

    <div>
        <h5 className='contact-address'>Email:</h5>
        <h5 className='contact-child'>ezthai@ezthairestaurant.net</h5>
    </div>




    <div>
        <h5 className='contact-address'>Hours:</h5>
        <h5 className='contact-child child-ver2'>Monday - Thursday: 11am - 8pm</h5>
        <h5 className='contact-child child-ver2'>Friday: 11am - 8.30pm</h5>
        <h5 className='contact-child child-ver2'>Saturday: Noon - 8.30 pm</h5>
        <h5 className='contact-child child-ver2'>Sunday: Noon - 8pm</h5>
        <h5 className='contact-child child-ver2'>Holidays: Open at Noon</h5>
    </div>



    <div>
        <h5 className='contact-address'>Address:</h5>
        <h5 className='contact-child child-ver2'>120 S. Solomons Island Rd., Prince Frederick, MD 20678, US</h5>

    </div>


    </div>
</section>



<section className='contact'>
    <div className="container">
        <div className="row" style={{gap:'1.2rem'}}>
            <div className="col-md-12">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder='Enter your mail' />
            </div>
            <div className="col-md-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" placeholder='Enter your name' />
            </div>

            <div className="col-md-12">
            <label htmlFor="" className="form-label">Message</label>
                <textarea type="text" className="form-control" placeholder='Your message' ></textarea>
            </div>
            <div className="col-md-12">
            <button className="btn btn-dark">Send</button>
            </div>
        </div>
    </div>
</section>









<section className="review">
            <div className="image">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29138.083924292212!2d32.92070582639793!3d24.092333220042224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14367b5ab1a30e5f%3A0xfb109fe337cabccb!2z2KPYs9mI2KfZhg!5e0!3m2!1sar!2seg!4v1685194796616!5m2!1sar!2seg" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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


