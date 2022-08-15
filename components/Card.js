import React from "react"


export default function Card(props) {
    let badgeText
    if (props.item.open === 0) {
        badgeText = "ADOPTED"
    } else if (props.item.availability === "AVAILABLE") {
        badgeText = "AVAILABLE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./public/images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="./public/images/Star.png" className="card--star" />
                <span className="gray">{props.item.availability}</span>
            </div>
            <p className="card--name">{props.item.name}</p>
        </div>
    )
}