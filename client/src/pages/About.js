import React from "react";
import said from "../assets/profiles/SaidHadad.png";
import shannon from "../assets/profiles/shannonNell.png";
import sarah from "../assets/profiles/sarahAzzopardi.png";
import muscLogo from "../assets/profiles/muscodeersLogo.png";


const About = () => {
    return (
        <div>
            <container className="aboutus">
                <div className="about-intro">
                    <h1 className="abouth">About Us</h1>
                    <p>
                        Hello and welcome. Thank you for visiting and using our app! We hope this app will help you find amazing local vendors as you travel across the world.
                </p>
                    <p>If you have a vendor you know of that deserves to be on this app, please
                    <a href="mailto:locoforlocalapp@gmail.com">
                            EMAIL US!
                    </a>
                    </p>
                </div>
            </container>
            <container className="whoweare">
                <div className="about-musc">
                    <h3 className="abouth">Who We Are</h3>

                    <h4>
                        <img src={muscLogo} height="100" alt="The Three Muscodeers Logo - All for Code, Code for All" className="musc-logo" />
                    </h4>
                    <h5>Three Muscodeers</h5>
                    <p className="aboutp">We are a trio of full stack web developers with a love of travel.
                    This application derived out of a want for a simple way to find local shops, farmers markets, restaurants, etc and be able to support local businesses on our travels.
                    Currently we are Canada wide, farmers markets only; but with user input on the best local places to visit we hope to expand to all local vendors, nation wide!</p>
                </div>
            </container>

            <div className="about-cards">
                {/* SARAH'S CARD */}
                <div className="card">
                    <div className="card-img">
                        <img src={sarah} height="200" width="200" alt="Profile of Sarah" className="profile-img" />
                    </div>
                    <div className="card-title">
                        <h4>Sarah Azzopardi</h4>
                        <h5>Muscodeer Aramis</h5>
                    </div>
                    <div className="card-body">
                        <p>Sarah is primarily our front end designer.</p>
                        <p>Fun fact: Sarah is an avid gardener and lover of all things nature. House Slytherin</p>
                        <a href="https://github.com/sylviamarja" target="_blank">Sarah's GitHub</a>
                    </div>
                </div>

                {/* SAID'S CARD */}
                <div className="card">
                    <div className="card-img">
                        <img src={said} height="200" width="200" alt="Profile of Said" className="profile-img" />
                    </div>
                    <div className="card-title">
                        <h4>Said Hadad</h4>
                        <h5>Muscodeer Athos</h5>
                    </div>
                    <div className="card-body">
                        <p>Said worked primarily on back end server side and the Google map API.</p>
                        <p>Fun fact: Said is a self declared professional IKEA furniture assembler.</p>
                        <a href="https://github.com/saidHadad" target="_blank">Said's GitHub</a>
                    </div>
                </div>

                {/* SHANNON'S CARD */}
                <div className="card">
                    <div className="card-img">
                        <img src={shannon} height="200" width="200" alt="Profile of Shannon" className="profile-img" />
                    </div>
                    <div className="card-title">
                        <h4>Shannon Nell</h4>
                        <h5>Muscodeer Porthos</h5>
                    </div>
                    <div className="card-body">
                        <p>Shannon teamed up with Said on the back end server side and focused on mutations and queries.</p>
                        <p>Fun fact: Shannon loves to surf and is sad she doesn't live close to a warm surfable ocean.</p>
                        <a href="https://github.com/ShannonNell" target="_blank">Shannon's GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;