"use client";
import React, { useState } from "react";
import Image from "next/image";
import backImage from "/assets/background-image.png";
import styles from "./login.module.css";
import Input from "@/components/base/Input";
import Button from "@/components/base/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
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
        if (res.status === "success") {
          const token = res.data.token;
          const role = res.data.role;
          console.log(token);
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
        }
        // localStorage.setItem("token", res.data.token)
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/");
  };

  return (
    <div className="container">
      <div className={`row ${styles.wrapAll}`}>
        <div
          className="col-lg-6"
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
        <div className={`col-lg-6 ${styles.wrapperText}`}>
          <div className={`${styles.wrapText}`}>
            <div>
              <h2>Halo, Pewpeople</h2>
              <p className={`${styles.line}`}>
                Selamat datang kembali di Peworld! Masuk untuk mengakses talenta
                terbaik dan kelola proses rekrutmen Anda dengan lebih efektif.
              </p>
            </div>
            <form>
              <div className={`${styles.wrapInput}`}>
                <Input
                  className={`mb-4 ${styles.label}`}
                  child="Email"
                  placeholder="Masukan alamat email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <Input
                  className={`mb-4 ${styles.label}`}
                  child="Kata Sandi"
                  placeholder="Masukan kata sandi"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
            </form>
            <div>
              <p className={`text-end mb-4 ${styles.forgot}`}>
                Lupa kata sandi?
              </p>
            </div>
            <div className="mb-4">
              <Button
                onClick={handleSubmit}
                child="Masuk"
                className={styles.loginButton}
              />
            </div>
            <div className={`text-center ${styles.wrapNone}`}>
              <Link href="/auth/register" style={{ textDecoration: "none" }}>
                <p className={`${styles.none}`}>
                  Anda belum punya akun?{" "}
                  <span style={{ color: "#FBB017" }}>Daftar disini</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
