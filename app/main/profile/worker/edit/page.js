"use client";

import Button from "@/components/base/button";
import Input from "@/components/base/Input";
import TextArea from "@/components/base/textArea";
import Card from "@/components/module/Card";
import CardBody from "@/components/module/CardBody";
import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import Profile from "/assets/Ellipse 330.svg";
import Cloud from "/assets/Vector.png";
import Photo from "/assets/photo (1) 2.png";
import Expand from "/assets/expand 2.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { addSkill, deleteSkill, getSkill } from "@/service/skill";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";
import { PiMapPin } from "react-icons/pi";
import { addExperience } from "@/service/workExp";
import { getWorkerByID } from "@/service/worker";
import { useRouter } from "next/navigation";

const EditWorkerPage = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  // const [exp, setExp] = useState("");
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
  });

  const [expData, setExpData] = useState({
    position: "",
    company: "",
    work_month: "",
    work_year: "",
    description: "",
  });

  // const [image, setImage] = useState("");
  const [portfolio, setPortfolio] = useState({
    application_name: "",
    link_repository: "",
    application: "",
    image: "",
  });

  const router = useRouter();

  const handleGetSkill = async () => {
    try {
      const response = await getSkill();
      setSkills(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetSkill();
  }, []);

  const handleAddSkill = async () => {
    try {
      await addSkill(skill);
      alert("Add Skill Success!");
      handleGetSkill();
      setSkill("");
    } catch (error) {
      console.log(error);
      alert("Add Skill Failed!");
    }
  };

  const handleDeleteSkill = async (skill_id) => {
    try {
      await deleteSkill(skill_id);
      alert("Delete Skill Success!");
      handleGetSkill();
    } catch (error) {
      console.log(error);
      alert("Delete Skill Failed!");
    }
  };

  // const handleAddExp = async () => {
  //   try {
  //     await addExperience(exp);
  //     alert("Add Experience Success!");
  //     console.log(exp);
  //     setExp("");
  //   } catch (error) {
  //     console.log(error);
  //     alert("Add Experience Failed!");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/workers/profile`,
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
      // router.push("/main/profile/worker/edit");
      getWorkerByID();
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

  const getWorkerById = async () => {
    try {
      const response = await getWorkerByID();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkerById();
  }, []);

  const handleAddExperience = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/experience`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(expData),
        }
      );
      console.log("RESULT EXP = ", result);
      alert("Add Experience Success");
    } catch (error) {
      console.log(error);
      alert("Add Experience Failed");
    }
  };

  const handleChangeExp = (e) => {
    setExpData((expData) => ({
      ...expData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddPortfolio = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/portfolio`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(portfolio),
        }
      );
      console.log("RESULT PORTOFOLIO = ", result);
      alert("Add Portofolio Success");
      router.push("/")
    } catch (error) {
      console.log(error);
      alert("Add Portofolio Failed");
    }
  };

  const handleChangePortfolio = (e) => {
    setPortfolio((portfolio) => ({
      ...portfolio,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUploadFile = async (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append("file", e.target.files[0])

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
      setPortfolio((portfolio)=>({
        ...portfolio,
        image: result.data.file_url,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          {/* Left */}
          <div className="col-6">
            {/* {data.map(() => ( */}
            <>
              <CardBody className="">
                <div className="d-flex justify-content-center">
                  <Image src={Profile} alt="Profile Photo" />
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <Button className="d-flex gap-1" style={{ border: "none" }} >
                    <div>
                      <RiPencilFill style={{ color: "#9EA0A5" }} />
                    </div>
                    <div>
                      <p style={{ color: "#9EA0A5" }}>Edit</p>
                    </div>
                  </Button>
                </div>
                <div className="mt-4" style={{ marginLeft: "4rem" }}>
                  <h5 style={{ color: "#1F2A36" }}>{data.name}</h5>
                  <p style={{ color: "#1F2A36", fontSize: "13px" }}>
                    {data.job_desk}
                  </p>
                  <div className="d-flex gap-2">
                    <div>
                      <PiMapPin style={{ color: "#9EA0A5" }} />
                    </div>
                    <div style={{ marginTop: "3.5px" }}>
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
                  <p
                    style={{
                      color: "#9EA0A5",
                      fontSize: "13px",
                      paddingBottom: "30px",
                    }}
                  >
                    {data.workplace}
                  </p>
                </div>
              </CardBody>
            </>
            {/* ))} */}
            <div className="d-flex flex-column gap-3">
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
                child="Nama Lengkap"
                placeholder="Masukan nama lengkap"
                className="mb-4"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <Input
                child="Job desc"
                placeholder="Masukan job desk"
                className="mb-4"
                name="job_desk"
                value={values.job_desk}
                onChange={handleChange}
              />
              <Input
                child="Domisili"
                placeholder="Masukan domisili"
                className="mb-4"
                name="domicile"
                value={values.domicile}
                onChange={handleChange}
              />
              <Input
                child="Tempat kerja"
                placeholder="Masukan tempat kerja"
                className="mb-4"
                name="workplace"
                value={values.workplace}
                onChange={handleChange}
              />
              <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                Deskripsi singkat
              </p>
              <TextArea
                title="Tuliskan deskripsi singkat"
                name="description"
                value={values.description}
                onChange={handleChange}
                className=""
                style={{ height: "144px", width: "570px" }}
              />
            </Card>

            {/* Skill */}
            <Card title="Skill" style={{ marginBottom: "30px", width: "97%" }}>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    {skills &&
                      skills.map((item) => (
                        <div key={item.id}>
                          <Button
                            onClick={() => handleDeleteSkill(item.id)}
                            style={{ border: "none", color: "#1F2A36" }}
                          >
                            {" "}
                            <IoCloseCircleOutline />{" "}
                          </Button>
                          <Button
                            className="ms-2"
                            style={{
                              backgroundColor: "#FBB017",
                              color: "#fff",
                            }}
                          >
                            {item.skill_name}
                          </Button>
                        </div>
                      ))}
                  </div>
                  <Input
                    placeholder="Javascript"
                    style={{ width: "500px" }}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                </div>
                <div className="col-6" style={{ position: "relative" }}>
                  <Button
                    child="Simpan"
                    style={{
                      width: "80px",
                      height: "45px",
                      backgroundColor: "#FBB017",
                      color: "#fff",
                      fontSize: "14px",
                      position: "absolute",
                      left: "70%",
                      top: "35%",
                      // transform: "translateY(5%)",
                    }}
                    onClick={handleAddSkill}
                  />
                </div>
              </div>
            </Card>

            {/* Work Experience */}
            <Card
              title="Pengalaman Kerja"
              style={{ marginBottom: "30px", width: "97%" }}
            >
              <Input
                child="Posisi"
                placeholder="web developer"
                className="mb-4"
                name="position"
                value={expData.position}
                onChange={handleChangeExp}
              />
              <div className="row">
                <div className="col-4">
                  <Input
                    child="Nama perusahaan"
                    placeholder="PT Harus bisa"
                    className="mb-4"
                    style={{ width: "190px" }}
                    name="company"
                    value={expData.company}
                    onChange={handleChangeExp}
                  />
                </div>
                <div className="col-4">
                  <Input
                    child="Bulan"
                    placeholder="Januari"
                    className="mb-4"
                    style={{ width: "190px" }}
                    name="work_month"
                    value={expData.work_month}
                    onChange={handleChangeExp}
                  />
                </div>
                <div className="col-4">
                  <Input
                    child="Tahun"
                    placeholder="2023"
                    className="mb-4"
                    style={{ width: "165px" }}
                    name="work_year"
                    value={expData.work_year}
                    onChange={handleChangeExp}
                  />
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                Deskripsi singkat : {expData.description}
              </p>
              <TextArea
                title="Deskripsikan pekerjaan anda"
                className=""
                style={{
                  height: "144px",
                  width: "570px",
                  marginBottom: "2rem",
                }}
                name="description"
                value={expData.description}
                onChange={handleChangeExp}
              />
              <hr />
              <Button
                onClick={handleAddExperience}
                child="Tambah pengalaman kerja"
                style={{
                  border: "1px solid #FBB017",
                  color: "#FBB017",
                  width: "570px",
                  height: "45px",
                }}
                className="mt-3"
              />
            </Card>

            {/* Portfolio */}
            <Card
              title="Portofolio"
              style={{ marginBottom: "80px", width: "97%" }}
            >
              <Input
                child="Nama aplikasi"
                placeholder="Masukan nama aplikasi"
                className="mb-4"
                name="application_name"
                value={portfolio.application_name}
                onChange={handleChangePortfolio}
              />
              <Input
                child="Link repository"
                placeholder="Masukan link repository"
                className="mb-4"
                name="link_repository"
                value={portfolio.link_repository}
                onChange={handleChangePortfolio}
              />
              {/* <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                Type portofolio
              </p> */}
              <Input
                child="Type portofolio"
                placeholder="Aplikasi Web"
                className="mb-4"
                name="application"
                value={portfolio.application}
                onChange={handleChangePortfolio}
              />
              {/* <div className="d-flex gap-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    // checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Aplikasi mobile
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Aplikasi web
                  </label>
                </div>
              </div> */}

              <div className="mt-4" style={{ width: "98%" }}>
                {/* <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                  Upload gambar
                </p> */}
                <Input
                  id="image-portofolio"
                  child="Upload gambar"
                  style={{
                    borderStyle: "dashed",
                    borderColor: "#9EA0A5",
                    borderWidth: "1px",
                    width: "100%",
                    marginBottom: "1rem",
                    paddingTop: "3rem",
                    paddingBottom: "3rem",
                  }}
                  type="file"
                  name="image"
                  onChange={handleUploadFile}
                />
                {/* <div className="d-flex justify-content-center">
                  <Image src={Cloud} alt="cloud" />
                </div>

                <div className="mt-4">
                  <p style={{ color: "#1F2A36" }}>
                    Drag & Drop untuk Upload Gambar Aplikasi Mobile
                  </p>
                  <p style={{ color: "#1F2A36", fontSize: "14px" }}>
                    Atau cari untuk mengupload file dari direktorimu.
                  </p>
                </div> */}

                {/* <div className="d-flex justify-content-center mt-5 gap-5"> */}
                  {/* Left */}
                  {/* <div className="d-flex gap-2">
                    <Image src={Photo} alt="image" />
                    <p style={{ color: "#1F2A36", fontSize: "12px" }}>
                      High-Res Image <br /> PNG, JPG or GIF
                    </p>
                  </div> */}

                  {/* Right */}
                  {/* <div className="d-flex gap-2">
                    <Image src={Expand} alt="expand" />

                    <p style={{ color: "#1F2A36", fontSize: "12px" }}>
                      Size <br />
                      1080x1920 or 600x800
                    </p>
                    <p style={{ color: "#1F2A36", fontSize: "12px" }}></p>
                  </div>
                </div> */}
              </div>

              <hr />

              <Button
                child="Tambah portofolio"
                style={{
                  border: "1px solid #FBB017",
                  color: "#FBB017",
                  width: "570px",
                  height: "45px",
                }}
                className="mt-3"
                onClick={handleAddPortfolio}
              />
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditWorkerPage;
