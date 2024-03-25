"use client";

import CardBody from "@/components/module/CardBody";
import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import Profile from "/assets/Ellipse 330.svg";
import { PiMapPin } from "react-icons/pi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Input from "@/components/base/Input";
import TextArea from "@/components/base/textArea";
import Button from "@/components/base/button";
import { useParams, useRouter } from "next/navigation";

const Hire = () => {
  const [data, setData] = useState([]);
  const [skill, setSkill] = useState([]);
  const { id } = useParams();
  const [hire, setHire] = useState({
    message_purpose: "",
    worker_id: id,
    name: "",
    email: "",
    phone: "",
    desciption: "",
  });
  const router = useRouter();

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

  const handleAddHire = async () => {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hire`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hire),
      });
      console.log("RESULT HIRE = ", result);
      alert("Add Hire Success");
      router.push("/")
    } catch (error) {
      console.log(error);
      alert("Add Hire Failed");
    }
  };

  const handleChangeHire = (e) => {
    setHire((hire) => ({
      ...hire,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <NavBar />

      <div className="container">
        <div className="d-flex">
          {/* Left */}

          <div style={{ marginBottom: "8rem" }}>
            <CardBody style={{ width: "50%" }}>
              <div className="d-flex justify-content-center">
                <Image
                  src={Profile}
                  alt="photo-profile"
                  style={{ marginLeft: "2.5rem", marginBottom: "1rem" }}
                />
              </div>
              <div className="mb-4" style={{ marginLeft: "3rem" }}>
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
                {/* <p style={{ color: "#9EA0A5", fontSize: "13px" }}>Freelancer</p> */}
                <p style={{ color: "#9EA0A5", fontSize: "13px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>
              </div>

              <div
                className=""
                style={{ marginLeft: "3rem", paddingBottom: "1rem" }}
              >
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
            </CardBody>
          </div>

          {/* Right */}
          <div style={{ marginRight: "13rem" }}>
            <div>
              <h2>{`Hubungi ${data.name}`}</h2>
              <p className="mt-4" style={{ color: "#46505C" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>

              <Input
                child="Tujuan tentang pesan ini"
                placeholder="Projek"
                className="mb-4"
                name="message_purpose"
                value={hire.message_purpose}
                onChange={handleChangeHire}
              />

              <Input
                child="Nama lengkap"
                placeholder="Masukan nama lengkap"
                className="mb-4"
                name="name"
                value={hire.name}
                onChange={handleChangeHire}
              />

              <Input
                child="Email"
                placeholder="Masukan email"
                className="mb-4"
                name="email"
                value={hire.email}
                onChange={handleChangeHire}
              />

              <Input
                child="No Handphone"
                placeholder="Masukan no handphone"
                className="mb-4"
                name="phone"
                value={hire.phone}
                onChange={handleChangeHire}
              />

              <p style={{ fontSize: "14px", color: "#9EA0A5" }}>Deskripsi</p>
              <TextArea
                title="Deskripsikan/jelaskan lebih detail"
                className=""
                style={{ height: "201px", width: "570px" }}
                name="desciption"
                value={hire.desciption}
                onChange={handleChangeHire}
              />

              <Button
                child="Hire"
                style={{
                  width: "100%",
                  backgroundColor: "#FBB017",
                  color: "#fff",
                  marginTop: "3rem",
                  marginBottom: "10rem",
                }}
                onClick={handleAddHire}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hire;
