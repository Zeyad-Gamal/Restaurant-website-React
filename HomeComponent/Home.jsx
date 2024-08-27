import React, { Component } from 'react'
import styles from '../styles/style.css';
import logo from '../image/pngwing.com.png';
import background from '../image/ferks-guare-KEZdWfYD-ow-unsplash.jpg';
export default class Home extends Component {
  // state={
  //   name:'nouran',
  //   count:0
  // }

//   changeCount=()=>{
// let count=this.state.count;
// count=10;
// console.log(count)
// this.setState({count})
//   }
  render() {
    return (
      <>
      {/* <button className="btn btn-danger">f</button>
      <h1>home component</h1>
      <h2>count:{this.state.count}</h2>
      <button onClick={()=>this.changeCount()} className='btn btn-info'>changeCount</button> */}
         <div className="up" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: '22rem'}}>

<section className="describtion">
                <h1 className="heading-title">Welcome to <span style={{color: '#f4510b'}}>BiteQuick</span></h1>
                <p style={{color: 'white', fontSize: '1.5rem', marginTop: '5rem'}}>Indulge in a culinary journey at Restaurant, where delectable flavors and impeccable service intertwine.<br />Discover our thoughtfully crafted menu, featuring locally sourced ingredients and tantalizing<br />creations. Experience the perfect blend of taste and ambiance, making every<br />visit an unforgettable dining experience.</p>
                <a href="" className="btn">Order now</a>
                <a href="" className="btn btnver2">Our menu</a>
            </section>
            </div>



            <section className="about">
            <div className="content">
                <h3>About Us</h3>
                <p>Welcome to our fast food restaurant, where speed, convenience, and flavor come together in perfect harmony. Our diverse menu offers a tantalizing selection of quick bites and satisfying meals that cater to all tastes. Sink your teeth into our juicy burgers, crispy chicken tenders, and perfectly seasoned fries that will have your taste buds dancing with delight. Each item is carefully prepared using only the freshest ingredients, ensuring a burst of flavor in every bite. Whether you're grabbing a meal on the run or enjoying a casual dine-in experience, our attentive staff is dedicated to providing prompt service without compromising on quality. With our vibrant atmosphere and mouthwatering offerings, we invite you to experience the ultimate fast food destination that will leave you craving more. Join us and discover the irresistible fusion of convenience and culinary satisfaction at our fast food haven.</p>
            </div>

            <div className="image">
                <img src={require("../image/shardar-tarikul-islam-3UmTH5x2guQ-unsplash.jpg")} alt="" />
            </div>

            <div className="image">
                <img src={require("../image/19.png")} alt="" />
            </div>

            <div className="content">
                <p>Welcome to our fast food restaurant, where speed, convenience, and flavor come together in perfect harmony. Our diverse menu offers a tantalizing selection of quick bites and satisfying meals that cater to all tastes. Sink your teeth into our juicy burgers, crispy chicken tenders, and perfectly seasoned fries that will have your taste buds dancing with delight. Each item is carefully prepared using only the freshest ingredients, ensuring a burst of flavor in every bite. Whether you're grabbing a meal on the run or enjoying a casual dine-in experience, our attentive staff is dedicated to providing prompt service without compromising on quality. With our vibrant atmosphere and mouthwatering offerings, we invite you to experience the ultimate fast food destination that will leave you craving more. Join us and discover the irresistible fusion of convenience and culinary satisfaction at our fast food haven.</p>
            </div>
        </section>







        <section className="packages">
            <h1 className="heading-title" style={{ color: '#f4510b' }}>Popular meals</h1>

            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <img src={require("../image/13.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">Italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">Order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>


                <div className="box">
                    <div className="image">
                        <img src={require("../image/13.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">Italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">Order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div> <div className="box">
                    <div className="image">
                        <img src={require("../image/13.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">Italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">Order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div> <div className="box">
                    <div className="image">
                        <img src={require("../image/13.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">Italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">Order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>

                {/* Add more boxes similarly */}

            </div>
        </section>






        <section className="review">
            <div className="image">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29138.083924292212!2d32.92070582639793!3d24.092333220042224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14367b5ab1a30e5f%3A0xfb109fe337cabccb!2z2KPYs9mI2KfZhg!5e0!3m2!1sar!2seg!4v1685194796616!5m2!1sar!2seg" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="form">
                <form action="" method="post" className="review-form">
                    <div className="flex">
                        <div className="inputBox">
                            <span>name :</span>
                            <input type="text" placeholder="enter your name" name="name" />
                        </div>
                
                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="enter your email" name="email" />
                        </div>
                
                        <div className="inputBox">
                            <span>phone :</span>
                            <textarea className="form-control" id="review" rows="5" placeholder="Enter your review" required></textarea>
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
