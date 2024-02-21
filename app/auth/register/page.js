"use client";
import Button from "@/components/base/button";
import Input from "@/components/base/Input";
import backImage from "/assets/background-image.png";
import styles from "./register.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Recruiter from "@/components/module/RegisterRecruiter";

const RegisterPage = () => {
  const router = useRouter();
  const [tab, setTab] = useState("register Pekerja");

  const [form, setform] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setform((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_API_URL + "/workers/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        if (!res.ok) {
          const result = await res.json();
          throw result.message;
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
    <div className="container">
      <div className="row">
        <div
          className="col-6"
          style={{ height: "100vh", backgroundColor: "#5E50A1" }}
        >
          <Image
            // className={styles.img}
            src={backImage}
            alt="background image"
            style={{
              width: "100%",
              height: "100%",
              opacity: "25%",
            }}
          />
        </div>
        <div className="col-6" style={{ height: "100vh" }}>
          <div>
            <h2 style={{ color: "#1F2A36", fontWeight: "600" }}>
              Halo, Pewpeople
            </h2>
            <p style={{ fontWeight: "400" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              doloribus, aspernatur quaerat dolore iure a!
            </p>
          </div>
          <div className="d-flex gap-5">
            <p
              onClick={() => setTab("register Pekerja")}
              style={{ color: "#9EA0A5" }}
            >
              Register Pekerja
            </p>
            <p
              onClick={() => setTab("register Perekrut")}
              style={{ color: "#9EA0A5" }}
            >
              Register Perekrut
            </p>
          </div>
          {tab === "register Pekerja" && (
            <form>
              <div>
                <Input
                  className="mb-4"
                  child="Nama"
                  placeholder="Masukan nama panjang"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <Input
                  className="mb-4"
                  child="Email"
                  placeholder="Masukan alamat email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  className="mb-4"
                  child="No handphone"
                  placeholder="Masukan no handphone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <Input
                  className="mb-4"
                  child="Kata Sandi"
                  placeholder="Masukan kata sandi"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
                {/* <Input
              className="mb-4"
              child="Konfirmasi kata sandi"
              placeholder="Masukan konfirmasi kata sandi"
            /> */}
              </div>
              <div className="mb-2">
                <Button
                  onClick={handleSubmit}
                  child="Daftar"
                  className={styles.registerButton}
                />
              </div>
            </form>
          )}
          {tab === "register Perekrut" && <Recruiter />}
          <div className="text-center" style={{ paddingRight: "70px" }}>
            <Link href="/auth/login" style={{ textDecoration: "none" }}>
              <p
                style={{
                  color: "#1F2A36",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Anda sudah punya akun?{" "}
                <span style={{ color: "#FBB017" }}>Masuk disini</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
