"use client";
import Button from "@/components/base/button";
import Input from "@/components/base/Input";
import TextArea from "@/components/base/textArea";
import Card from "@/components/module/Card";
import CardBody from "@/components/module/CardBody";
import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import { RiPencilFill } from "react-icons/ri";
import { PiMapPin } from "react-icons/pi";
import Profile from "/assets/Ellipse 330.svg";
import Avatar from "/assets/profile-avatar.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const EditRecruiterPage = () => {
  const [values, setValues] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    phone: "",
    instagram: "",
    linkedin: "",
    // photo: "",
  });

  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const form = new FormData();
    // form.append("company", values.company);
    // form.append("position", values.position);
    // form.append("city", values.city);
    // form.append("description", values.description);
    // form.append("phone", values.phone);
    // form.append("instagram", values.instagram);
    // form.append("linkedin", values.linkedin);
    // form.append("company", values.company);
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recruiters/profile`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      console.log("RESULT = ", result);
      alert("Update Recruiter Profile Success");
      handleGetRecruiter();
    } catch (error) {
      console.log(error);
      alert("Update Recruiter Profile Failed");
    }
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

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
      console.log("RESULT GET RECRUITER = ", result.data);
      setData(result.data);
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
        <div className="row">
          {/* Left */}
          <div className="col-6">
            <CardBody>
              <div className="d-flex justify-content-center">
                {data ? (
                  <Image
                    src={Avatar}
                    alt="Profile Photo"
                    width={150}
                    height={150}
                  />
                ) : (
                  <Image
                    src={Avatar}
                    alt="Profile Photo"
                    width={100}
                    height={100}
                  />
                )}
              </div>
              <div className="d-flex justify-content-center">
                <Button className="d-flex gap-1" style={{ border: "none" }}>
                  <div>
                    <RiPencilFill style={{ color: "#9EA0A5" }} />
                  </div>
                  <div>
                    <p style={{ color: "#9EA0A5" }}>Edit</p>
                  </div>
                </Button>
              </div>
              <div className="mt-4 d-flex justify-content-center" >
                <div>
                  <h5 style={{ color: "#1F2A36" }}>{data.company}</h5>
                  <p style={{ color: "#1F2A36", fontSize: "13px", marginBottom: "0px" }} className="mt-2">
                    {data.position}
                  </p>
                  <div className="d-flex gap-2 mt-2 pb-3">
                    <PiMapPin style={{ color: "#9EA0A5", marginTop: "3px" }} />
                    <p
                      style={{
                        color: "#9EA0A5",
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      {data.city}
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
            <div className="d-flex flex-column gap-3 mt-3">
              <Button
                child="Simpan"
                style={{ backgroundColor: "#5E50A1", color: "#fff" }}
                onClick={handleSubmit}
              />
              <Button
                child="Batal"
                style={{ color: "#5E50A1", borderColor: "#5E50A1" }}
              />
            </div>
          </div>
          {/* Right */}
          <div className="col-6">
            {/* Personal */}
            <Card
              title="Data Diri"
              style={{ marginBottom: "30px", width: "97%" }}
            >
              <Input
                child="Nama Perusahaan"
                placeholder="Masukan nama perusahan"
                className="mb-4"
                name="company"
                value={values.company}
                onChange={handleChange}
              />
              <Input
                child="Bidang"
                placeholder="Masukan bidang perusahaan ex : Financial"
                className="mb-4"
                name="position"
                value={values.position}
                onChange={handleChange}
              />
              <Input
                child="Kota"
                placeholder="Masukan kota"
                className="mb-4"
                name="city"
                value={values.city}
                onChange={handleChange}
              />
              <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                Deskripsi singkat
              </p>
              <TextArea
                title="Tuliskan deskripsi singkat"
                className="mb-4"
                style={{ height: "144px", width: "570px" }}
                name="description"
                value={values.description}
                onChange={handleChange}
              />
              {/* <Input
                child="Email"
                placeholder="Masukan email"
                className="mb-4"
              /> */}
              <Input
                child="Nomor Telepon"
                placeholder="Masukan nomor telepon"
                className="mb-4"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              <Input
                child="Instagram"
                placeholder="Masukan nama Instagram"
                className="mb-4"
                name="instagram"
                value={values.instagram}
                onChange={handleChange}
              />
              <Input
                child="Linkedin"
                placeholder="Masukan nama Linkedin"
                className="mb-4"
                name="linkedin"
                value={values.linkedin}
                onChange={handleChange}
              />
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditRecruiterPage;
