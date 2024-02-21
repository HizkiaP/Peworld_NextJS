import CardBody from "@/components/module/CardBody";
import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import Profile from "/assets/Ellipse 330.svg";
import { PiMapPin } from "react-icons/pi";
import Image from "next/image";
import React from "react";
import Input from "@/components/base/Input";
import TextArea from "@/components/base/textArea";
import Button from "@/components/base/button";

const Hire = () => {
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

              <div className="mb-5" style={{ marginLeft: "3rem" }}>
                <h5>Skill</h5>
              </div>
            </CardBody>
          </div>

          {/* Right */}
          <div style={{ marginRight: "13rem" }}>
            <div>
              <h2>Hubungi Lous Tomlinson</h2>
              <p className="mt-4" style={{ color: "#46505C" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>

              <Input
                child="Tujuan tentang pesan ini"
                placeholder="Projek"
                className="mb-4"
              />

              <Input
                child="Nama lengkap"
                placeholder="Masukan nama lengkap"
                className="mb-4"
              />

              <Input
                child="Email"
                placeholder="Masukan email"
                className="mb-4"
              />

              <Input
                child="No Handphone"
                placeholder="Masukan no handphone"
                className="mb-4"
              />

              <p style={{ fontSize: "14px", color: "#9EA0A5" }}>Deskripsi</p>
              <TextArea
                title="Deskripsikan/jelaskan lebih detail"
                className=""
                style={{ height: "201px", width: "570px" }}
              />

              <Button child="Hire" style={{ width: "100%", backgroundColor: "#FBB017", color: "#fff", marginTop: "3rem", marginBottom: "10rem" }}/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hire;
