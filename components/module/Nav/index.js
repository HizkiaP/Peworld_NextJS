import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoNav from "/assets/Group 980 1.png";
import Link from "next/link";
import Button from "@/components/base/button";
import styles from "./nav.module.css";
import NavBar from "../NavBar";
import NavLogin from "../NavLogin";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGetRole = () => {
    const role = localStorage.getItem("role");
    if (role) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    handleGetRole();
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <NavLogin />
      ) : (
        <nav className={`${styles.navbar}`}>
          <div
            className={`d-flex justify-content-between mt-4 ${styles.wrapperNav}`}
          >
            <div className="">
              <Link className="navbar-brand" href="/">
                <Image
                  src={logoNav}
                  alt="Navbar Logo"
                  width="127"
                  height="35"
                />
              </Link>
            </div>
            <div className="d-flex gap-3">
              <Link href="/auth/login" style={{ textDecoration: "none" }}>
                <Button className={styles.navButton1} child="Masuk" />
              </Link>

              <Link
                href="/auth/register"
                style={{ textDecoration: "none", color: "#5E50A1" }}
              >
                <Button className={styles.navButton2} child="Daftar" />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>

    // <nav className="navbar">
    //   <div className="container mt-3">
    //     <div className="row">
    //       <div className="col">
    //         <Link className="navbar-brand" href="/">
    //           <Image src={logoNav} alt="Navbar Logo" width="127" height="35" />
    //         </Link>
    //       </div>
    //       <div className="col">
    //         <div className="row">
    //           <div className="d-flex justify-content-center">
    //           <div className="col-6">
    //             <Link href="/auth/login" style={{ textDecoration: "none"}}>
    //             <Button className={styles.navButton1} child="Masuk"/>
    //             </Link>
    //           </div>
    //           <div className="col-6">
    //             <Link href="/auth/register" style={{ textDecoration: "none" }}>
    //             <Button className={styles.navButton2} child="Daftar"/>
    //             </Link>
    //           </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Nav;
