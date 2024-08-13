import React from "react";
import "./host.scss";

function Host({ host }) {
    return (
        <div className="host">
            <img src={host.picture} alt={host.name} className="host-picture" />
            <div className="host-name">{host.name}</div>
        </div>
    );
}

export default Host;
