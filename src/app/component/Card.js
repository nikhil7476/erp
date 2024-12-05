"use client";
import React from "react";
import Image from "next/image";

const Card = (props) => {
  // Fallback image if props.user is empty or undefined
  const imageSrc = props.user || "/assets/defaultImage.png"; // Replace with the path to a default image in the public folder

  return (
    <div className="card">
      <div className="studentCard">
        <div className="studentCardTitle">
          <h4>{props?.name}</h4>
        </div>
        <div className="studentImg">
          {/* Conditionally render the image */}
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={props?.name || "Image not found"}
              width={100}
              height={100}
              className="studImg"
            />
          )}
        </div>
        <div className="studentItemList">
          <div className="addNewStudent">
            {props.icon}
            <h5>{props.action}</h5>
          </div>
          <div className="addNewStudent">
            {props.icon2}
            <h5>{props.action2}</h5>
          </div>
          <div className="addNewStudent">
            {props.icon3}
            <h5>{props.action3}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
