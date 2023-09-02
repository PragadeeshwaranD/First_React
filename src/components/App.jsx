import React from "react";
import Heading from "./Header";
import Backimg from "./backimg";
import Card from "./card";
import Db from "../Db";
import Footer from "./Footer";

function send(Db){
    return(<Card
    name={Db.name}
    para={Db.para}
    img={Db.img}
    />)
}

function App1(){
    return(<div>
        <Heading/>
        <Backimg/>
        {Db.map(send)};
        <Footer/>
    </div>)
}

export default App1;