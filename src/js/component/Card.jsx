import React from "react";

export default function Card(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.srcImage} className="card-img-top objectFit-cover" alt="..." style={{ height: "200px", width: "287px" }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className="list-group list-group-flush">
                    <a href="#" className="btn btn-primary">{props.text}</a>
                </div>
            </div>
        </div>
    )
}
