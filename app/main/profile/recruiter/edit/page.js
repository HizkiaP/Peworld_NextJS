"use client"
import Button from '@/components/base/button'
import Input from '@/components/base/Input'
import TextArea from '@/components/base/textArea'
import Card from '@/components/module/Card'
import CardBody from '@/components/module/CardBody'
import Footer from '@/components/module/Footer'
import NavBar from '@/components/module/NavBar'
import { RiPencilFill } from "react-icons/ri";
import { PiMapPin } from "react-icons/pi";
import Profile from "/assets/Ellipse 330.svg";
import Image from 'next/image'
import React, { useState } from 'react'

const EditRecruiterPage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          {/* Left */}
          <div className="col-6">
            <CardBody className="">
              <div className="d-flex justify-content-center">
                <Image src={Profile} alt="Profile Photo" />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Button className="d-flex gap-1" style={{ border: "none" }}>
                  <div>
                    <RiPencilFill style={{ color: "#9EA0A5" }} />
                  </div>
                  <div>
                    <p style={{ color: "#9EA0A5" }}>Edit</p>
                  </div>
                </Button>
              </div>
              <div className="mt-4" style={{ marginLeft: "4rem" }}>
                <h5 style={{ color: "#1F2A36" }}>PT. Martabat Jaya Abadi</h5>
                <p style={{ color: "#1F2A36", fontSize: "13px" }}>
                Financial
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
                      Purwokerto, Jawa Tengah
                    </p>
                  </div>
                </div>
                {/* <p style={{ color: "#9EA0A5", fontSize: "13px" }}>Freelancer</p> */}
              </div>
            </CardBody>
            <div className="d-flex flex-column gap-3 mt-3">
              <Button
                child="Simpan"
                style={{ backgroundColor: "#5E50A1", color: "#fff" }}
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
              />
              <Input
                child="Bidang"
                placeholder="Masukan bidang perusahaan ex : Financial"
                className="mb-4"
              />
              <Input
                child="Kota"
                placeholder="Masukan kota"
                className="mb-4"
              />
              <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                Deskripsi singkat
              </p>
              <TextArea
                title="Tuliskan deskripsi singkat"
                className="mb-4"
                style={{ height: "144px", width: "570px" }}
              />
              <Input
                child="Email"
                placeholder="Masukan email"
                className="mb-4"
              />
              <Input
                child="Instagram"
                placeholder="Masukan nama Instagram"
                className="mb-4"
              />
              <Input
                child="Nomor Telepon"
                placeholder="Masukan nomor telepon"
                className="mb-4"
              />
              <Input
                child="Linkedin"
                placeholder="Masukan nama Linkedin"
                className="mb-4"
              />
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditRecruiterPage