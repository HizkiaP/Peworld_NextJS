"use client"
// import Button from '@/components/base/Button'
import React from "react";
import Footer from "@/components/module/Footer";
import Recruiter from "@/components/module/RegisterRecruiter";
import Card from "@/components/module/Card";
import Nav from "@/components/module/Nav";
import Button from "@/components/base/button";
import Image from "next/image";
import Img from "/assets/Group 1195.png";
import Img2 from "/assets/Group 1194.png";
import Img3 from "/assets/Group 1196.png";
import Img4 from "/assets/Ellipse 320.png";
import Img5 from "/assets/Ellipse 323.png";
import Img6 from "/assets/Ellipse 325.png";
import Icon from "/assets/tick 1.png";
import Icon2 from "/assets/tick 13.png";
import CardBody from "@/components/module/CardBody";
import styles from "./page.module.css"

const Home = () => {
  return (
    <>
      <Nav />
      {/* Hero Section */}
      <section className="container">
        <div
          className="d-flex mt-5"
          // style={{ marginLeft: "7rem", marginRight: "7rem" }}
        >
          {/* Left */}
          <div className="w-50 d-flex align-items-center">
            <div>
              <h2 style={{ lineHeight: "50px" }}>
                Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
              </h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
                Iusto eius itaque ullam, at cum nam! Sunt placeat aperiam
                laudantium numquam.
              </p>
              <Button
                child="Mulai Dari Sekarang"
                className="mb-5 mt-4"
                style={{
                  width: "180px",
                  height: "50px",
                  backgroundColor: "#5E50A1",
                  color: "#fff"
                }}
                // onClick={() => }
              />
            </div>
          </div>
          {/* Right */}
          <div className="w-50 d-flex justify-content-end">
            <Image
              src={Img}
              alt="Hero Image"
              // width={0}
              // height={0}
              // style={{ width: "100%", height: "auto" }}
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: "70px" }}>
        <div
          className="d-flex"
          // style={{ marginLeft: "7rem", marginRight: "7rem" }}
        >
          {/* Left */}
          <div className="w-100">
            <Image
              src={Img2}
              alt="hero-image"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              // style={{ width: "446px", height: "329px"}}
            />
          </div>

          {/* Right */}
          <div className="w-100">
            <div className="ms-3" style={{ marginTop: "40px" }}>
              <div>
                <h3 className="">Kenapa harus mencari talent di peworld</h3>
                <div className="mt-4">
                  <li className="d-flex justify-content-start mb-2">
                    <Image src={Icon} alt="check" />
                    <p className="ms-3">Lorem ipsum dolor sit.</p>
                  </li>
                  <li className="d-flex justify-content-start mb-2">
                    <Image src={Icon} alt="check" />
                    <p className="ms-3">Lorem ipsum dolor sit.</p>
                  </li>
                  <li className="d-flex justify-content-start mb-2">
                    <Image src={Icon} alt="check" />
                    <p className="ms-3">Lorem ipsum dolor sit.</p>
                  </li>
                  <li className="d-flex justify-content-start">
                    <Image src={Icon} alt="check" />
                    <p className="ms-3">Lorem ipsum dolor sit.</p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="d-flex">
          {/* Left */}
          <div style={{ marginLeft: "12rem", marginTop: "5rem" }}>
            <h4>Skill Tallent</h4>
            <p className="mb-4 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="d-flex">
              <div>
                <li className="d-flex mb-3">
                  <Image src={Icon2} alt="check" />
                  <p className="ms-3">Java</p>
                </li>
                <li className="d-flex mb-3">
                  <Image src={Icon2} alt="check" />
                  <p className="ms-3">Kotlin</p>
                </li>
                <li className="d-flex mb-3">
                  <Image src={Icon2} alt="check" />
                  <p className="ms-3">PHP</p>
                </li>
                <li className="d-flex">
                  <Image src={Icon2} alt="check" />
                  <p className="ms-3">JavaScript</p>
                </li>
              </div>

              <div style={{ marginLeft: "5rem" }}>
                <li className="d-flex mb-3">
                  <Image src={Icon2} alt="check" />
                  <p className="ms-3">Golang</p>
                </li>
                <li className="d-flex mb-3">
                  <Image src={Icon2} alt="check" />
                  <p className="ms-3">C++</p>
                </li>
                <li className="d-flex mb-3">
                  <Image src={Icon2} alt="check" />
                  <p className="ms-3">Ruby</p>
                </li>
                <li className="d-flex">
                  <Image src={Icon2} alt="check" />
                  <p className="ms-3">10+ Bahasa lainnya</p>
                </li>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <Image src={Img3} alt="hero-image" />
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: "100px" }}>
          <h4 className="text-center mb-5">Their opinion about peworld</h4>
        <div className="d-flex justify-content-center" style={{ marginBottom: "10rem" }}>
          <div className="d-flex justify-content-between gap-3">
            <div className="text-center">
            <CardBody style={{ width: "339px", height: "377px", padding: "25px 30px 25px 30px" }}>
                <Image src={Img4} alt="Harry"/>
                <h5>Harry Styles</h5>
                <p style={{ color: "#9EA0A5", fontSize: "14px" }}>Web Developer</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quas similique molestiae sunt voluptatem eveniet molestias vitae doloribus excepturi ullam!</p>
            </CardBody>
            </div>

            <div className="text-center text-center">
            <CardBody style={{ width: "339px", height: "377px", padding: "25px 30px 25px 30px" }}>
                <Image src={Img5} alt="Niall" />
                <h5>Niall Horan</h5>
                <p style={{ color: "#9EA0A5", fontSize: "14px" }}>Web Developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CardBody>
            </div>
            
            <div className=" text-center text-center">
            <CardBody style={{ width: "339px", height: "377px", padding: "25px 30px 25px 30px" }}>
                <Image src={Img6} alt="Louis" />
                <h5>Louis Tomlinson</h5>
                <p style={{ color: "#9EA0A5", fontSize: "14px" }}>Web Developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </CardBody>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div style={{ width: "100%", height: "auto", borderRadius: "40px 8px 40px 8px", backgroundColor: "#5E50A1", marginBottom: "7rem" }}>
          <div className="d-flex justify-content-between" style={{ padding: "100px 100px" }}>
          <div className="">
              <h4 style={{ color: "#FFFFFF", width: "65%", fontSize: "32px" }}>Lorem ipsum dolor sit amet</h4>
          </div>
            <div className="">
              <Button  child="Mulai Dari Sekarang" style={{ backgroundColor: "#FFFFFF", color: "#796EAF", padding: "13px 13px" }}/>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Home;
