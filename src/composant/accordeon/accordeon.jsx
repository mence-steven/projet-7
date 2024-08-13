import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./accordeon.scss";

function Accordeon({ title, content }) {
    const [active, setActive] = useState(false);

    const basculeAccordion = () => {
        setActive(!active);
    };

    return (
        <div className={`accordeon ${active ? "active" : ""}`}>
            <div className="accordeon_title" onClick={basculeAccordion}>
                {title}
                <span className="accordeon_icon">
                    {active ? (
                        <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronUp} />
                    )}
                </span>
            </div>
            {active && <div className="accordeon_content">{content}</div>}
        </div>
    );
}

export default Accordeon;


/*import React from "react";
import { useState } from "react";
import "./accordeon.scss";

function Accordeon({title, content}) {
    const [active, setActive] = useState(false)

    const glisser = e => {
        setActive(!active)
    }
    return <div className={`accordeon ${active && "active"}`}>
        <div  className="accordeon_title">{title}
            <span className="accordeon_icon"></span>
        </div>
        <div  className="accordeon_content">{content}</div>

    </div>
}

export default Accordeon;
*/