"use client";

import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import React, { useEffect, useState } from "react";
import { IoLocation } from "react-icons/io5";
import { PiMapPin } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { CiUser } from "react-icons/ci";
// import { TailSpin } from "react-loader-spinner";
import Profile from "/assets/profile-avatar.png";
import Link from "next/link";
import Styles from "./style.module.css";
import Image from "next/image";

const Portofolio = () => {
  const [dataRecruiter, setDataRecruiter] = useState({});

  const handleGetRecruiter = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recruiters/profile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      console.log(result.data);
      setDataRecruiter(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetRecruiter();
  }, []);
  return (
    <>
      <NavBar />
      <div className="container">
        <div
          style={{
            backgroundColor: "#5E50A1",
            height: 200,
            width: 1200,
            marginLeft: 60,
            marginTop: 50,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          {/* <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignContent: "end",
              textAlign: "end",
            }}
          >
            <MdEdit style={{ marginTop: "175px", marginRight: "7px", color: "#fff" }} />
            <p
              style={{
                color: "white",
                marginTop: "170px",
                marginRight: "10px",
              }}
            >
              Ubah Latar
            </p>
          </div> */}
          <div className={Styles.content}>
            {/* {loading ? (
            <div className="flex justify-center mt-4">
              <TailSpin color="#fff" height={50} width={50} />
            </div>
          ) : ( */}
            {/* <> */}
            <Image
                  src={Profile}
                  alt="photo-profile"
                  style={{ marginLeft: "5px", marginBottom: "1rem" }}
                  width={170}
                  height={170}
                />
            {/* <CiUser
              style={{
                width: 80,
                height: 80,
                borderRadius: 70,
                marginBottom: "20px",
                marginLeft: 50,
              }}
            /> */}
            <h3>{dataRecruiter.company}</h3>
            <h5>{dataRecruiter.position}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                color: "#9EA0A5",
              }}
              className="gap-2"
            >
              {/* <IoLocation /> */}
              <PiMapPin />
              <p style={{ paddingTop: 10 }}>{dataRecruiter.city}</p>
            </div>
            <button type="submit" style={{ marginBottom: 5 }}>
              <Link href="/main/profile/recruiter/edit" style={{ textDecoration: "none", color: "#fff" }}>Edit Profile</Link>
            </button>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                  fontSize: "14px",
                  color: "#9EA0A5",
                }}
                className="gap-2"
              >
                <MdEmail />
                <p style={{ paddingTop: 10 }}>{dataRecruiter.email}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#9EA0A5",
                }}
                className="gap-2"
              >
                <FaInstagram />
                <p style={{ paddingTop: 10 }}>{dataRecruiter.instagram}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#9EA0A5",
                }}
                className="gap-2"
              >
                <FaPhoneAlt />
                <p style={{ paddingTop: 10 }}>{dataRecruiter.phone}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#9EA0A5",
                }}
                className="gap-2"
              >
                <CiLinkedin />
                <p style={{ paddingTop: 10 }}>{dataRecruiter.linkedin}</p>
              </div>
            </div>
            {/* </> */}
            {/* )} */}
          </div>
        </div>
        <div style={{ marginTop: "45em" }}></div>
      </div>
      <Footer />
    </>
  );
};

export default Portofolio;
