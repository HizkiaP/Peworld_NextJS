'use client'

import Button from "@/components/base/button";
import Input from "@/components/base/Input";
import backImage from "/assets/background-image.png";
import styles from "./recruiter.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

const Recruiter = () => {
  const router = useRouter()

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    position: "",
    phone: "",
  })

  const handleChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recruiters/register`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async(res) => {
        if(!res.ok){
          const result = await res.json()
          throw result.message
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/auth/login");
  };

  return (
      <div className="row">
        <div className="col-lg-6" style={{ height: "100vh" }}>
          <form>
            <div>
              <Input
                className={`mb-4 ${styles.label}`}
                child="Nama"
                placeholder="Masukan nama panjang"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                className={`mb-4 ${styles.label}`}
                child="Email"
                placeholder="Masukan alamat email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                className={`mb-4 ${styles.label}`}
                child="Perusahaan"
                placeholder="Masukan nama perusahaan"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
              <Input
                className={`mb-4 ${styles.label}`}
                child="Jabatan"
                placeholder="Posisi di perusahaan Anda"
                name="position"
                value={form.position}
                onChange={handleChange}
              />
              <Input
                className={`mb-4 ${styles.label}`}
                child="No handphone"
                placeholder="Masukan no handphone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
              <Input
                className={`mb-4 ${styles.label}`}
                child="Kata Sandi"
                placeholder="Masukan kata sandi"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              {/* <Input
                className="mb-4"
                child="Konfirmasi kata sandi"
                placeholder="Masukan konfirmasi kata sandi"
              /> */}
            </div>
          </form>
          <div className="">
            <Button child="Daftar" className={`mt-2 ${styles.registerButton}`} onClick={handleSubmit}/>
          </div>
          {/* <div className="text-center" style={{ paddingRight: "70px" }}>
            <p
              style={{ color: "#1F2A36", fontSize: "14px", fontWeight: "400" }}
            >
              Anda sudah punya akun?{" "}
              <span style={{ color: "#FBB017" }}>Masuk disini</span>
            </p>
          </div> */}
        </div>
      </div>
  );
};

export default Recruiter;
