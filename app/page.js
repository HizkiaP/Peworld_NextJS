"use client";
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
import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Nav />
      {/* Hero Section */}
      <section className="container">
        <div
          className={`${styles.wrapAll} mt-5`}
        >
          {/* Left */}
          <div className={`${styles.wrapLeft}`}>
            <div>
              <h2 className="">
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h2>
              <p className="mt-3">
                Temukan talenta unggulan dengan Peworld. Pengalaman rekrutmen
                yang efisien dan terpercaya untuk memperkuat tim Anda.
              </p>
              <Link href={`/main/home`}>
              <Button
                child="Mulai Dari Sekarang"
                className="mb-5 mt-4"
                style={{
                  width: "180px",
                  height: "50px",
                  backgroundColor: "#5E50A1",
                  color: "#fff",
                }}
              />
              </Link>
            </div>
          </div>
          {/* Right */}
          <div className={`${styles.wrapRight}`}>
            <Image
              src={Img}
              alt="Hero Image"
              className={`${styles.heroImg}`}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.wrapContainer} container`}>
        <div
          className={`${styles.wrapAll2}`}
        >
          {/* Left */}
          <div className={`${styles.wrapLeft2}`}>
            <Image
              src={Img2}
              alt="hero-image"
              className={`${styles.heroImg2}`}
              // style={{  height: "auto" }}
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
                    <p className="ms-3">Ragam Keahlian</p>
                  </li>
                  <li className="d-flex justify-content-start mb-2">
                    <Image src={Icon} alt="check" />
                    <p className="ms-3">Inovasi dan Kreativitas</p>
                  </li>
                  <li className="d-flex justify-content-start mb-2">
                    <Image src={Icon} alt="check" />
                    <p className="ms-3">Fleksibilitas</p>
                  </li>
                  <li className="d-flex justify-content-start">
                    <Image src={Icon} alt="check" />
                    <p className="ms-3">Adaptabilitas</p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.wrapContainer2} container`}>
        <div className={`${styles.wrapAll3}`}>
          {/* Left */}
          <div className={`${styles.wrapLeft3}`}>
            <h4>Skill Talent</h4>
            <p className="mb-4 mt-3">
              Talent mempunyai keterampilan dalam berbagai bahasa pemrograman
              yang beragam, memungkinkan mereka untuk berkontribusi dalam
              berbagai proyek teknologi.
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
          <div className={`${styles.wrapRight3}`}>
            <Image src={Img3} alt="hero-image" className={`${styles.heroImg3}`}/>
          </div>
        </div>
      </section>

      <section className={`${styles.wrapContainer3} container`}>
        <h4 className="text-center mb-5">Their opinion about peworld</h4>
        <div
          className={`${styles.wrapCard}`}
        >
          <div className={`${styles.card}`}>
            <div className="text-center">
              <CardBody
                style={{
                  width: "339px",
                  height: "377px",
                  padding: "25px 30px 25px 30px",
                }}
              >
                <Image src={Img4} alt="Harry" />
                <h5>Harry Styles</h5>
                <p style={{ color: "#9EA0A5", fontSize: "14px" }}>
                  Web Developer
                </p>
                <p>
                  Aplikasi Peworld dirancang untuk memberikan fleksibilitas dan
                  keterbukaan terhadap kebutuhan berbagai jenis perusahaan
                </p>
              </CardBody>
            </div>

            <div className="text-center text-center">
              <CardBody
                style={{
                  width: "339px",
                  height: "377px",
                  padding: "25px 30px 25px 30px",
                }}
              >
                <Image src={Img5} alt="Niall" />
                <h5>Niall Horan</h5>
                <p style={{ color: "#9EA0A5", fontSize: "14px" }}>
                  Web Developer
                </p>
                <p>
                  Peworld menarik talenta unggulan yang aktif mencari peluang
                  baru dan siap untuk berkontribusi secara signifikan dalam
                  perusahaan
                </p>
              </CardBody>
            </div>

            <div className=" text-center text-center">
              <CardBody
                style={{
                  width: "339px",
                  height: "377px",
                  padding: "25px 30px 25px 30px",
                }}
              >
                <Image src={Img6} alt="Louis" />
                <h5>Louis Tomlinson</h5>
                <p style={{ color: "#9EA0A5", fontSize: "14px" }}>
                  Web Developer
                </p>
                <p>
                  memungkinkan perusahaan untuk menemukan kandidat terbaik dari
                  berbagai latar belakang dan keahlian
                </p>
              </CardBody>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "40px 8px 40px 8px",
            backgroundColor: "#5E50A1",
            marginBottom: "7rem",
          }}
        >
          <div
            className={`${styles.wrapBtn}`}
          >
            <div className={`${styles.wrapText}`}>
              <h4>
              Temukan talenta unggulan dengan Peworld
              </h4>
            </div>
            <div className="">
              <Button
                child="Mulai Dari Sekarang"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#796EAF",
                  padding: "13px 13px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
