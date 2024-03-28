"use client";

import CardBody from "@/components/module/CardBody";
import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import Image from "next/image";
import Profile from "/assets/profile-avatar.png";
import { PiMapPin } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiGitlabLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import Button from "@/components/base/button";
import Experience from "@/components/module/Experience";
import Styles from "./portofolio.module.css";
import { useParams } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import Swal from "sweetalert2";
import Link from "next/link";
import { Form, Modal } from "react-bootstrap";

const Portofolio = () => {
  const [tab, setTab] = useState("portofolio");
  const [data, setData] = useState([]);
  const [skill, setSkill] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [role, setRole] = useState("");
  const { id } = useParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [updatePortfolio, setUpdatePortfolio] = useState({
    application_name: "",
    link_repository: "",
    application: "",
    image: "",
  });

  const handleShow = () => setModalVisible(true);
  const handleClose = () => setModalVisible(false);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const handleGetDetailWorker = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/workers/${id}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetDetailWorker();
  }, []);

  const handleGetSkill = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/skills/${id}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      console.log(result.data);
      setSkill(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetSkill();
  }, []);

  const handleGetPortfolio = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      console.log(result.data);
      setPortfolio(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetPortfolio();
  }, []);

  return (
    <>
      <NavBar />

      <div className="container">
        <div className="d-flex">
          {/* Left */}
          <div style={{ marginBottom: "8rem" }}>
            <CardBody style={{ width: "45%", paddingRight: "15px" }}>
              {data ? (
                <Image
                  src={Profile}
                  alt="photo-profile"
                  style={{ marginLeft: "2.5rem", marginBottom: "1rem" }}
                  width={150}
                  height={150}
                />
              ) : (
                <Image
                  src={Profile}
                  alt="photo-profile"
                  style={{ marginLeft: "2.5rem", marginBottom: "1rem" }}
                  width={150}
                  height={150}
                />
              )}
              <div className="mb-4">
                <h5 style={{ color: "#1F2A36" }}>{data.name}</h5>
                <p style={{ color: "#1F2A36", fontSize: "13px" }}>
                  {data.job_desk}
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
                      {data.domicile}
                    </p>
                  </div>
                </div>
                <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                  {data.workplace}
                </p>
                <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                  {data.description}
                </p>
              </div>

              {role === "recruiter" ? (
                <Link href={`/main/hire/${data.id}`}>
                  <Button
                    child="Hire"
                    style={{
                      backgroundColor: "#5E50A1",
                      color: "#fff",
                      width: "227px",
                      height: "44px",
                      marginBottom: 30,
                    }}
                  />
                </Link>
              ) : ""}

              <div style={{ marginBottom: "40px" }}>
                <h5 className="mb-3">Skill</h5>
                {skill.map((item, index) => (
                  <Button
                    key={index}
                    style={{
                      border: "none",
                      color: "#fff",
                      backgroundColor: "#FBB017",
                      fontSize: "14px",
                      marginRight: "7px",
                      marginBottom: "10px",
                    }}
                  >
                    {item.skill_name}
                  </Button>
                ))}
              </div>

              <div className="">
                {/* Email */}
                <div className="d-flex pb-4">
                  <div>
                    <MdOutlineEmail style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                      {data.email}
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </div>

          {/* Right */}
          <div style={{ width: "100%" }}>
            <CardBody style={{ width: "100%" }}>
              <div>
                <div className="d-flex">
                  <div>
                    <Button
                      onClick={() => setTab("portofolio")}
                      className={
                        tab === "portofolio"
                          ? `${Styles.activeTab}`
                          : `${Styles.inactiveTab}`
                      }
                    >
                      <h5>Portofolio</h5>
                    </Button>
                  </div>

                  <div className="">
                    <Button
                      onClick={() => setTab("experience")}
                      className={
                        tab === "experience"
                          ? `${Styles.activeTab}`
                          : `${Styles.inactiveTab}`
                      }
                    >
                      <h5>Pengalaman kerja</h5>
                    </Button>
                  </div>
                </div>

                {tab === "portofolio" && (
                  <div style={{ display: "flex", gap: "15px" }}>
                    {portfolio.map((item, index) => (
                      <div
                        style={{ marginTop: "2rem", textAlign: "center" }}
                        key={index}
                      >
                        <Image
                          src={item.image}
                          alt="Image Portofolio"
                          width={219}
                          height={148}
                          style={{ borderRadius: "6px" }}
                        />
                        <div>
                          <p style={{ marginTop: "7px" }}>
                            {item.application_name}
                          </p>
                        </div>
                      </div>
                    ))}
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
