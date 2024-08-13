import React from "react";
import "./titleLocation.scss";

function TitleLocation({ title, location }) {
    return (
        <div className="title-location">
            <h1 className="title">{title}</h1>
            <p className="location">{location}</p>
        </div>
    );
}

export default TitleLocation;
