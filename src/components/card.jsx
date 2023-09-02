// eslint-disable-next-line
import React from "react";


function Card(props){
    return(<div class="com1">
    <div class="heading1"><h1>{props.name}</h1>
    <p>{props.para}</p>
    <a href="#" class="glyphicon glyphicon-arrow-right"> Learn more</a></div>
    <div class="img1" ><img src={props.img}/></div>
    </div>)
}

export default Card;