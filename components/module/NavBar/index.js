"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoNav from "/assets/Group 980 1.png";
import Profile from "/assets/photo-profile.png";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [role, setRole] = useState("worker");

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  return (
    <nav className="navbar mt-3">
      <div className={`container ${styles.wrapAll}`}>
        <div className="row w-100">
          <div className="col">
            <Link className="navbar-brand" href="/">
              <Image src={logoNav} alt="Navbar Logo" width="127" height="35" />
            </Link>
          </div>
          {/* <div className="col" style={{ marginRight: "900px" }}></div> */}
          <div className="col">
            <ul
              className="d-flex justify-content-end"
              style={{ listStyle: "none" }}
            >
              <Link
                href={
                  role === "worker"
                    ? `/main/notification/worker`
                    : `/main/notification/recruiter`
                }
              >
                <li style={{ color: "#000", marginTop: 2, marginRight: 30 }}>
                  <FaRegBell size={27} />
                </li>
              </Link>
              {/* <li style={{ color: "#000" }}>
                <IoMailOutline />
              </li> */}
              <li>
                <Image
                  src={Profile}
                  alt="Profile Photo"
                  width="48.291"
                  height="32.291"
                  style={{ borderRadius: "20px" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
