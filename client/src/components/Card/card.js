import React from "react"
import "../Card/card.css";
import locologo from "../assets/icon/locologo.png";

function Card() {
    const vendor = {
        name: "/",
        location: "/",
        description: "/",
        website: "/"
    };

    return (
        <div className="Card">
            <header className="card-header">
                <Card
                    name={vendor.name}
                    location={vendor.location}
                    website={vendor.website}
                    description={vendor.description}

                />
            </header>
        </div>
    );
}

export default Card;








// card styles
export default function Card(props) {
    return (
        <div className="cardbackground">
            <div className="cardcontainer">
                <div className="title">Vendor Information</div>
                <div className="body">
                    <div className='body'>
                        <p>{prop.name}</p>
                        <br />
                        <p>{prop.location}</p>
                        <br />
                        <p><Link to={prop.website}>{prop.website}</Link></p>
                        <br />
                        <p>{props.description}</p>
                    </div>
                </div>

                <img className="card-image" src={locologo} alt="Logo" />


            </div>
        </div>
    );
}