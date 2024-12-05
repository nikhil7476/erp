"use client";
import React from "react";
import Link from "next/link";
import { RiSchoolLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { LiaCitySolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { TbCategoryPlus } from "react-icons/tb";
import { PiTreeStructureLight } from "react-icons/pi";
import { MdOutlineSubject } from "react-icons/md";
import { FaChromecast } from "react-icons/fa6";
import SubCard from "@/app/component/SubCard";

const Page = () => {
  const cardData = [
    {
      href: "/master-entry/school-info",
      icon: <RiSchoolLine className="studentIcon" />,
      title: "School Information",
      description: "Add Basic Details Of School",
    },
    {
      href: "/master/schoolinfo",
      icon: <SiGoogleclassroom className="studentIcon" />,
      title: "Class Master",
      description: "Add Basic Details Of Class",
    },
    {
      href: "/master/schoolinfo",
      icon: <LiaCitySolid className="studentIcon" />,
      title: "City Master",
      description: "Add Basic Details of City Master",
    },
    {
      href: "/master/schoolinfo",
      icon: <SlCalender className="studentIcon" />,
      title: "Year Master",
      description: "Add Basic Details of Year",
    },
    {
      href: "/master/schoolinfo",
      icon: <HiOutlineDocumentPlus className="studentIcon" />,
      title: "Document Upload",
      description: "Upload Basic Details of Document",
    },
    {
      href: "/master/schoolinfo",
      icon: <TbCategoryPlus className="studentIcon" />,
      title: "Category Master",
      description: "Add Basic Details of Category",
    },
    {
      href: "/master/schoolinfo",
      icon: <PiTreeStructureLight className="studentIcon" />,
      title: "Religion Master",
      description: "Add Basic Details of Religion",
    },
    {
      href: "/master/schoolinfo",
      icon: <SiGoogleclassroom className="studentIcon" />,
      title: "Classroom Master",
      description: "Add Basic Details of Classroom",
    },
    {
      href: "/master/schoolinfo",
      icon: <MdOutlineSubject className="studentIcon" />,
      title: "Subject Master",
      description: "Add Basic Details of Subject",
    },
    {
      href: "/master/schoolinfo",
      icon: <FaChromecast className="studentIcon" />,
      title: "Cast Master",
      description: "Add Basic Details of Cast",
    },
  ];

  return (
    <div>
      <div className="studentHeading">
        <h2>Master Module</h2>
        <small>Manage your basic details....</small>
      </div>
      <div className="cardContainer">
        {cardData.map((card, index) => (
          <div className="subCard1" key={index}>
            <Link href={card.href} className="SubCardLink">
              <SubCard
                icon={card.icon}
                title={<h3>{card.title}</h3>}
                description={<p>{card.description}</p>}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
