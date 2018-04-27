import React, { Component } from 'react';

class Header extends Component {
    handleHamburgerClick = (e) =>{
        if(e.currentTarget.classList.contains("hamburger-btn-x")===true){
            //Close hamburger menu & revert to original state
            e.currentTarget.classList.remove("hamburger-btn-x");
            
        }else{
            //Open hamburger menu and convert item to X
            e.currentTarget.classList.add("hamburger-btn-x");
        }
    }
    render() {
        return (
            <section id="Header" >
                <h1 className="header-placeholder">Your Logo Here</h1>
                <nav className="header-nav">
                    <ul className="social-links-wrapper">
                        <li className="social-link-item">
                            <a href="https://www.facebook.com/" target="_blank">
                                <img src={require(".././media/images/icons/facebook-icon.png")} alt="facebook icon" />
                            </a>
                        </li>
                        <li className="social-link-item">
                            <a href="https://www.twitter.com/" target="_blank">
                                <img src={require(".././media/images/icons/twitter-icon.png")} alt="twitter icon" />
                            </a>
                        </li>
                        <li className="social-link-item">
                            <a href="https://www.instagram.com/" target="_blank">
                                <img src={require(".././media/images/icons/instagram-icon.png")} alt="instagram icon" />
                            </a>
                        </li>
                    </ul>
                    <ul className="nav-control-wrapper">
                        <li onClick={this.handleHamburgerClick} className="hamburger-btn">
                            <div></div>
                            <div></div>
                            <div></div>
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Header;