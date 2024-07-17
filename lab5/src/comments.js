import React from "react";
import girl_avatar from "./images/avatar1.png"
import './index.css'

const User = function(props){
    return(
        <div>
            <div className = "card">
                <a>
                    <img src = {props.image}alt = "avatar"/>
                </a>
                <div className="content">
                    <a className="author">{props.name}</a>
                </div>
                <div className="metadata">
                    Posted on <span className="date">{props.date}</span>
                </div>
                <div className="comment">
                    "{props.comments}"
                </div>
            </div>
        </div>
    )
}

export default User;