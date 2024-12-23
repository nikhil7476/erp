"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, user, link, action, action2, action3, icon, icon2, icon3 }) => {
  const imageSrc = user || "/assets/defaultImage.png"; // Fallback for missing image

  return (
    <div className="card">
      <div className="studentCard">
        <div className="studentCardTitle">
          <h4>{name}</h4>
        </div>
        <div className="studentData">
          <div className="studentImg">
            <Link href={link}>
              <Image
                src={imageSrc}
                alt={name || "Image not found"}
                width={100}
                height={100}
                className="studImg"
              />
            </Link>
          </div>
          <div className="studentItemList">
            <div className="addNewStudent">
              {icon}
              <h5>{action}</h5>
            </div>
            <div className="addNewStudent">
              {icon2}
              <h5>{action2}</h5>
            </div>
            <div className="addNewStudent">
              {icon3}
              <h5>{action3}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
