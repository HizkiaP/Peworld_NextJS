"use client";

import CardBody from "@/components/module/CardBody";
import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import Image from "next/image";
import Profile from "/assets/Ellipse 330.svg";
import { PiMapPin } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiGitlabLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import Button from "@/components/base/button";
import { useParams } from "next/navigation";
// import Portofolio from "@/app/main/profile/worker/portofolio";

const Experience = () => {
  const [tab, setTab] = useState("experience");
  const [exp, setExp] = useState([]);
  const { id } = useParams();

  const handleGetExperience = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/experience/${id}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      console.log(result.data);
      setExp(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetExperience();
  });

  return (
    <>
      {/* Right */}
      <div>
        <CardBody style={{ width: "100%" }}>
          <div>
            {/* <div className="d-flex">
              <div className="">
                <Button
                  onClick={() => setTab("experience")}
                  style={{
                    color: "#1F2A36 ",
                    border: "none",
                    marginRight: "2rem",
                    textDecoration: "underline solid #5E50A1 4px",
                  }}
                >
                  <h5>Pengalaman kerja</h5>
                </Button>
              </div>
            </div> */}

            <div style={{ marginTop: "2rem" }}>
              {exp.map((item, index) => (
                <div key={index} style={{ marginLeft: "1rem" }}>
                  <p style={{ marginBottom: 0, fontSize: "18px" }}>{item.position}</p>
                  <p style={{ marginBottom: 0, fontSize: "16px" }}>{item.company}</p>
                  <div className="d-flex gap-2">
                  <p style={{ marginBottom: 0, fontSize: "14px", color: "#9EA0A5" }}>{item.work_month}</p>
                  <p style={{ marginBottom: 30, fontSize: "14px", color: "#9EA0A5" }}>{item.work_year}</p>
                  </div>
                  {/* <p style={{ marginBottom: 0, fontSize: "12px" }}>{item.description}</p> */}
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </div>
      {/* {tab === "portofolio" && <Portofolio />} */}
    </>
  );
};

export default Experience;
