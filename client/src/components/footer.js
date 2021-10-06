import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="social">
                    <a href="https://www.instagram.com/locoforlocal2021/" target="_blank"><i className="icon ion-social-instagram"></i></a>
                    {/* <a href="/" target="_blank"><i className="icon ion-social-snapchat"></i></a> */}
                    {/* <a href="/" target="_blank"><i className="icon ion-social-twitter"></i></a> */}
                    <a href="https://www.facebook.com/locoforlocalapp" target="_blank"><i className="icon ion-social-facebook"></i></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/">Home</a></li>
                    <li className="list-inline-item"><a href="/signup">Register</a></li>
                    <li className="list-inline-item"><a href="/about">About</a></li>
                    {/* <li className="list-inline-item"><a href="/">Terms</a></li> */}
                </ul>
                <p className="copyright">Loco For Local © 2021</p>
            </footer>
        </div>
    );
}
export default Footer;