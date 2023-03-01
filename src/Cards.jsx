import React from "react";

const Cards =(props) =>
{
console.log(props);
    return(
        <>
        <div className="cards">
           <div className="card">
             <img src={props.imgsrc} alt="Mypic" className="card_img"/>
             <span className="card_category">{props.title}</span>
             <h3 className="card_title">{props.sname}</h3> 
             <a
             href={props.link}  rel="noreferrer">
             <button>Watch Now</button>
             </a>
           </div>
        </div>
        </>
    );

}

export default Cards;