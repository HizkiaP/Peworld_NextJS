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
import React, { useState } from "react";
import Button from "@/components/base/button";
import Portofolio from "@/app/main/profile/worker/portofolio/page";

const Experience = () => {
  const [tab, setTab] = useState("experience");

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
              <h1>Testing2...</h1>
            </div>
          </div>
        </CardBody>
      </div>
      {tab === "portofolio" && <Portofolio />}
    </>
  );
};

export default Experience;
