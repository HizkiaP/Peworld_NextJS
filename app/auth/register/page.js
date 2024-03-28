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
      <div className={`row ${styles.wrapAll}`}>
        <div className={`col-lg-6 ${styles.wrap2}`}>
          <Image
            // className={styles.img}
            src={backImage}
            alt="background image"
            className={`${styles.img}`}
          />
        </div>
        <div className={`col-lg-6 ${styles.wrapperText}`}>
          <div className={`${styles.wrapText}`}>
            <div>
              <h2>Halo, Pewpeople</h2>
              <p className={`${styles.line}`}>
                Bergabunglah dengan Peworld hari ini dan temukan peluang baru
                dalam mengelola bakat terbaik. Daftar sekarang untuk memulai
                perjalanan rekrutmen yang menginspirasi!
              </p>
            </div>
            <div className="d-flex gap-5">
              <p
                onClick={() => setTab("register Pekerja")}
                className={
                  tab === "register Pekerja"
                    ? `${styles.activeTab}`
                    : `${styles.inactiveTab} ${styles.tab}`
                }
              >
                Register Pekerja
              </p>
              <p
                onClick={() => setTab("register Perekrut")}
                className={
                  tab === "register Perekrut"
                    ? `${styles.activeTab}`
                    : `${styles.inactiveTab} ${styles.tab}`
                }
              >
                Register Perekrut
              </p>
            </div>
            {tab === "register Pekerja" && (
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
                <div className="">
                  <Button
                    onClick={handleSubmit}
                    child="Daftar"
                    className={`mt-2 ${styles.registerButton}`}
                  />
                </div>
              </form>
            )}
            {tab === "register Perekrut" && <Recruiter />}
            <div className="text-center" style={{ marginTop: "20px" }}>
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
    </div>
  );
};

export default RegisterPage;
