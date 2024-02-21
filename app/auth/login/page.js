'use client'
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
    password: ""
  })

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
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
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
        if(res.status === "success"){
          const token = res.data.token
          console.log(token);
          localStorage.setItem('token', token)
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
        <div className="col-6">
          <div>
            <h2
              style={{ color: "#1F2A36", fontWeight: "600", paddingTop: "15%" }}
            >
              Halo, Pewpeople
            </h2>
            <p style={{ fontWeight: "400" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              doloribus, aspernatur quaerat dolore iure a!
            </p>
          </div>
          <form>
          <div>
            <Input
              className="mb-4"
              child="Email"
              placeholder="Masukan alamat email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <Input
              className="mb-4"
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
            <p
              className="text-end mb-4"
              style={{
                fontWeight: "400",
                color: "#1F2A36",
                fontSize: "14px",
                paddingRight: "70px",
              }}
            >
              Lupa kata sandi?
            </p>
          </div>
          <div className="mb-4">
            <Button onClick={handleSubmit} child="Masuk" className={styles.loginButton} />
          </div>
          <div className="text-center" style={{ paddingRight: "70px" }}>
            <Link href="/auth/register" style={{ textDecoration: "none" }}>
              <p
                style={{
                  color: "#1F2A36",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Anda belum punya akun?{" "}
                <span style={{ color: "#FBB017" }}>Daftar disini</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
