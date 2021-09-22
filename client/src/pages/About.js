import React from "react";
import said from "../assets/profiles/SaidHadad.png";
import shannon from "../assets/profiles/shannonNell.png";
import sarah from "../assets/profiles/sarahAzzopardi.png";
import muscLogo from "../assets/profiles/muscodeersLogo.png";


const About = () => {
    return (
        <div>
            <div className="about-intro">
                <h1>About us</h1>
                <p>
                    Hello and welcome. Thank you for visiting and using our app! We hope this app will help you find amazing local vendors as you travel across the world.
                </p>
                <p>If you have a vendor you know of that deserves to be on this app, please
                    <a href="mailto:uoftgroup4@gmail.com">
                        email us!
                    </a>
                </p>
            </div>

            <div className="about-musc">
                <h3>Who We Are</h3>
                <h4>
                    <img src={muscLogo} height="100" alt="The Three Muscodeers Logo - All for Code, Code for All" className="musc-logo"/>
                    The Three Muscodeers
                </h4>
                <p>We are a trio of full stack web developers with a love of travel.
                    This application derived out of a want for a simple way to find local shops, farmers markets, restaurants, etc and be able to support local businesses on our travels.
                    Currently we are Canada wide, farmers markets only; but with user input on the best local places to visit we hop to expand to all local vendors, nation wide!</p>
            </div>

            <div className="about-cards">
                {/* SARAH'S CARD */}
                <div className="card">
                    <div className="card-img">
                        <img src={sarah} height="200" width="200" alt="Profile image of Sarah" className="profile-img" />
                    </div>
                    <div className="card-title">
                        <h4>Sarah Azzopardi</h4>
                        <h5>Muscodeer Aramis</h5>
                    </div>
                    <div className="card-body">
                        <p>Sarah is primarily our front end designer.</p>
                        <p>Fun fact: Sarah is from a tiny island in Italy. She also does not like public speaking.</p>
                        <a href="https://github.com/sylviamarja">Sarah's GitHub</a>
                    </div>
                </div>

                {/* SAID'S CARD */}
                <div className="card">
                    <div className="card-img">
                        <img src={said} height="200" width="200" alt="Profile image of Said" className="profile-img" />
                    </div>
                    <div className="card-title">
                        <h4>Said Hadad</h4>
                        <h5>Muscodeer Athos</h5>
                    </div>
                    <div className="card-body">
                        <p>Said worked primarily on back end server side and the Google map API.</p>
                        <p>Fun fact: Said is a self declared professional IKEA furniture assembler.</p>
                        <a href="https://github.com/saidHadad">Said's GitHub</a>
                    </div>
                </div>

                {/* SHANNON'S CARD */}
                <div className="card">
                    <div className="card-img">
                        <img src={shannon} height="200" width="200" alt="Profile image of Shannon" className="profile-img" />
                    </div>
                    <div className="card-title">
                        <h4>Shannon Nell</h4>
                        <h5>Muscodeer Porthos</h5>
                    </div>
                    <div className="card-body">
                        <p>Shannon teamed up with Said on the back end server side and focused on mutations and queries.</p>
                        <p>Fun fact: Shannon loves to surf and is sad she doesn't live close to a warm surfable ocean.</p>
                        <a href="https://github.com/ShannonNell">Shannon's GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;