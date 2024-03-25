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

  const handleUpdatePortfolio = async (itemsId) => {
    try {
      console.log("DATA UPDATE PORTFOLIO =", updatePortfolio);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/portfolio/${itemsId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatePortfolio),
        }
      );
      const result = await response.json();
      if(!result.status === "success"){
        throw result.error
      }

      console.log("RESULT UPDATE PORTOFOLIO = ", result);
      // alert("Update Portofolio Success");
      handleClose();
      handleGetPortfolio();
      // router.push("/")
    } catch (error) {
      console.log(error);
      alert("Update Portofolio Failed");
    }
  };

  const handleChangePortfolio = (e) => {
    setUpdatePortfolio((updatePortfolio) => ({
      ...updatePortfolio,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUploadFile = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", e.target.files[0]);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // "Content-Type": `multipart/form-data; boundary=MyBoundary`,
          },
          // body: JSON.stringify(form),
          body: form,
        }
      );
      const result = await response.json();
      console.log("RESULT UPLOAD IMAGE = ", result);
      setUpdatePortfolio((updatePortfolio) => ({
        ...updatePortfolio,
        image: result.data.file_url,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePortfolio = async (itemId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/portfolio/${itemId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      setPortfolio((prevPortfolio) =>
        prevPortfolio.filter((item) => item.id !== itemId)
      ),
        Swal.fire({
          icon: "success",
          title: "Delete Success",
          text: "Delete Success",
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Delete Failed",
      });
    }
  };

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>
              </div>

              {role === "worker" ? (
                <Link href={`/main/profile/worker/edit`}>
                  <Button
                    child="Edit Profile"
                    style={{
                      backgroundColor: "#5E50A1",
                      color: "#fff",
                      width: "227px",
                      height: "44px",
                      marginBottom: 30,
                    }}
                  />
                </Link>
              ) : (
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
              )}

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

                {/* Instagram */}
                {/* <div className="d-flex">
                  <div>
                    <FaInstagram style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                      @Louist91
                    </p>
                  </div>
                </div> */}

                {/* Github */}
                {/* <div className="d-flex">
                  <div>
                    <FiGithub style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                      @Louistommo
                    </p>
                  </div>
                </div> */}

                {/* Gitlab */}
                {/* <div className="d-flex">
                  <div>
                    <RiGitlabLine style={{ color: "#9EA0A5" }} />
                  </div>
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                      @Louistommo91
                    </p>
                  </div>
                </div> */}
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
                      className={tab === "portofolio" ? Styles.tab : ""}
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
                      className={tab === "experience" ? Styles.tab : ""}
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
                  <div style={{ display: "flex", gap: "15px" }}>
                    {portfolio.map((item, index) => (
                      <div
                        style={{ marginTop: "2rem", textAlign: "center" }}
                        key={index}
                        className="position-relative"
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
                        {role === "worker" && (
                          <>
                            <button
                              className="position-absolute mt-2"
                              style={{ left: "65%", top: "2%" }}
                              onClick={handleShow}
                            >
                              <TbEdit />
                            </button>

                            <Modal show={modalVisible} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Update Portfolio</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form.Label>App Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Edit App Name"
                                  name="application_name"
                                  value={updatePortfolio.application_name}
                                  onChange={handleChangePortfolio}
                                  className="mb-2"
                                />
                                <Form.Label>Link Repository</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Edit Link Repository"
                                  name="link_repository"
                                  value={updatePortfolio.link_repository}
                                  onChange={handleChangePortfolio}
                                  className="mb-2"
                                />
                                <Form.Label>App Type</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Edit Type App"
                                  name="application"
                                  value={updatePortfolio.application}
                                  onChange={handleChangePortfolio}
                                  className="mb-2"
                                />
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                  type="file"
                                  placeholder="Edit Type App"
                                  onChange={handleUploadFile}
                                />
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  onClick={handleClose}
                                  style={{
                                    borderColor: "#5E50A1",
                                    color: "#5E50A1",
                                  }}
                                >
                                  Close
                                </Button>
                                <Button
                                  onClick={() => handleUpdatePortfolio(item.id)}
                                  style={{
                                    backgroundColor: "#5E50A1",
                                    color: "#fff",
                                  }}
                                >
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                            <button
                              onClick={() => handleDeletePortfolio(item.id)}
                              className="position-absolute mt-2"
                              style={{ left: "80%", top: "2%" }}
                            >
                              <FaTrash />
                            </button>
                          </>
                        )}
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
