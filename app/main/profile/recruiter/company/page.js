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
import Experience from "@/components/module/Experience";
import Styles from "./portofolio.module.css";

const Portofolio = () => {
  const [tab, setTab] = useState("portofolio");

  return (
    <>
      <NavBar />

      <div className="container">
        <div className="d-flex">
          {/* Left */}

          <div style={{ marginBottom: "8rem" }}>
            <CardBody style={{ width: "25%" }}>
              <Image
                src={Profile}
                alt="photo-profile"
                style={{ marginLeft: "2.5rem", marginBottom: "1rem" }}
              />
              <div className="mb-4">
                <h5 style={{ color: "#1F2A36" }}>Louis Tomlinson</h5>
                <p style={{ color: "#1F2A36", fontSize: "13px" }}>
                  Web Developer
                </p>
                <div className="d-flex">
                  <div>
                    <PiMapPin style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p
                      style={{
                        color: "#9EA0A5",
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      Purwokerto, Jawa Tengah
                    </p>
                  </div>
                </div>
                <p style={{ color: "#9EA0A5", fontSize: "13px" }}>Freelancer</p>
                <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>
              </div>

              <div className="mb-5">
                <h5>Skill</h5>
              </div>

              <div className="">
                {/* Email */}
                <div className="d-flex">
                  <div>
                    <MdOutlineEmail style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                      Louistommo@gmail.com
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="d-flex">
                  <div>
                    <FaInstagram style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                      @Louist91
                    </p>
                  </div>
                </div>

                {/* Github */}
                <div className="d-flex">
                  <div>
                    <FiGithub style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                      @Louistommo
                    </p>
                  </div>
                </div>

                {/* Gitlab */}
                <div className="d-flex">
                  <div>
                    <RiGitlabLine style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                      @Louistommo91
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </div>

          {/* Right */}
          <div>
            <CardBody style={{ width: "100%" }}>
              <div>
                <div className="d-flex">
                  <div>
                    <Button
                      onClick={() => setTab("portofolio")}
                      className={tab === "portofolio" ? Styles.tab  : "" }
                      style={{
                        color: "#1F2A36",
                        border: "none",
                        textDecoration: "underline solid #5E50A1 4px",
                      }}
                    >
                      <h5>Portofolio</h5>
                    </Button>
                  </div>

                  <div className="">
                    <Button
                      onClick={() => setTab("experience")}
                      className={tab === "experience" ? Styles.tab  : "" }                      
                      style={{
                        color: "#1F2A36",
                        border: "none",
                        marginRight: "2rem",
                      }}
                    >
                      <h5>Pengalaman kerja</h5>
                    </Button>
                  </div>
                </div>

                {tab === "portofolio" && (
                  <div style={{ marginTop: "2rem" }}>
                    <h1>Testing...</h1>
                  </div>
                )}
              </div>
              {tab === "experience" && <Experience />}
            </CardBody>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Portofolio;
