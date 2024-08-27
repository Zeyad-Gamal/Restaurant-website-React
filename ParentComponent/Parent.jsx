import React, { Component } from 'react'
import Child from '../childComponent/Child'

export default class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedList: 'all'
        };
    }

    handleButtonClick = (listName, buttonName) => {
        const { selectedList } = this.state;
        if (listName !== "all") {
            this.setState({ selectedList: listName });
        } else {
            this.setState({ selectedList: 'all' });
        }

        // Reset color of all buttons
        document.getElementById("foodb").style.color = "#333";
        document.getElementById("drinksb").style.color = "#333";
        document.getElementById("addsb").style.color = "#333";
        document.getElementById("allb").style.color = "#333";

        // Change color of clicked button
        document.getElementById(buttonName).style.color = "#f4510b";
    }

  render() {
    const { selectedList } = this.state;

    return (
  <>

<section className="menu-options">
            <div className="box-container">
                <div className="box">
                <button id="foodb" onClick={() => this.handleButtonClick('food', 'foodb')}>Food</button>
                <button id="drinksb" onClick={() => this.handleButtonClick('drinks', 'drinksb')}>Drinks</button>
                <button id="addsb" onClick={() => this.handleButtonClick('adds', 'addsb')}>Adds</button>
                <button id="allb" onClick={() => this.handleButtonClick('all', 'allb')}>All</button>




                    {/* <button id="foodb" onClick={() => food('food', 'foodb')}>food</button>
                    <button id="drinksb" onClick={() => food('drinks', 'drinksb')}>drinks</button>
                    <button id="addsb" onClick={() => food('adds', 'addsb')}>adds</button>
                    <button id="allb" onClick={() => food('all', 'allb')}>all</button> */}
                </div>
            </div>
        </section>

        
         <section className="packages" id="food"  style={{ display: selectedList === 'food' || selectedList === 'all' ? 'block' : 'none' }}>
            <h1 className="heading-title">food</h1>
            <div className="box-container">
                {/* Box 1 */}
                <div className="box">
                    <div className="image">
                        <img src={require("../image/13.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="box">
                    <div className="image">
                        <img src={require("../image/18.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">pizza Tandoori chicken</span></div>
                        <p>Hawaiian pizza Tandoori chicken Italian cuisine </p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>

                {/* Repeat similar structure for other boxes */}
                {/* Box 3 */}
                <div className="box">
                    <div className="image">
                        <img src={require("../image/17.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">Pizza Buffalo</span></div>
                        <p>Pizza Buffalo wing Pasta Hamburg</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>

                {/* Repeat similar structure for other boxes */}

            </div>
        </section>



        <section className="packages" id="adds" style={{ display: selectedList === 'adds' || selectedList === 'all' ? 'block' : 'none' }}>
            <h1 className="heading-title">adds</h1>

            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <img src={require("../image/27.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>


                <div className="box">
                    <div className="image">
                        <img src={require("../image/28.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>


                <div className="box">
                    <div className="image">
                        <img src={require("../image/29.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>

                {/* Repeat the box structure for other items */}

            </div>
        </section>

{/* <child productInfo={this.state.products[0]} */}











        <section className="packages" id="drinks"  style={{ display: selectedList === 'drinks' || selectedList === 'all' ? 'block' : 'none' }}>
            <h1 className="heading-title">drinks</h1>

            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <img src={require("../image/23.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>





                <div className="box">
                    <div className="image">
                        <img src={require("../image/24.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>








                <div className="box">
                    <div className="image">
                        <img src={require("../image/25.png")} alt="" />
                    </div>
                    <div className="content">
                        <div className="price"><span className="price-num">$1999</span>  <span className="food">italian Pizza</span></div>
                        <p>Pizza Take-out Fast food Italian cuisine, pizza</p>
                        <div className="box-buttons">
                            <a href="#" className="btn">order</a>
                            <a href="#" className="btn menu"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>

                {/* Repeat the box structure for other items */}

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


