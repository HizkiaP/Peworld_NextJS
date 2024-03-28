import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoNav from "/assets/Group 980 1.png";
import Button from "@/components/base/button";
import { useParams, useRouter } from "next/navigation";
import styles from "./navLogin.module.css";

const NavLogin = () => {
  const router = useRouter();
  const [roled, setRoled] = useState("");
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  // const { id } = useParams();

  const handleRoute = () => {
    // const worker = router.push("/main/profile/worker/portofolio");
    // const recruiter = router.push("/main/profile/recruiter/company");

    if (roled === "worker") {
      return router.push(`/main/profile/worker/portofolio`);
    } else if(roled === "recruiter") {
      return router.push("/main/profile/recruiter/company");
    }
  };

  const handleRemoveToken = () => {
    const token = localStorage.removeItem("token");
    const role = localStorage.removeItem("role");

    if (token && role) {
      setIsLoggedOut(false);
    }
  };

  useEffect(()=>{
    const roles = localStorage.getItem("role");
    if(roles){
        setRoled(roles)
    }
  },[])
  return (
    <nav className="navbar mt-3">
      <div className="container">
        <div className="row">
          <div className="col d-flex">
            <Link className="navbar-brand" href="/">
              <Image src={logoNav} alt="Navbar Logo" width="127" height="35" />
            </Link>
            <Button
              child="Home"
              className={`${styles.home}`}
              onClick={() => router.push("/main/home")}
            />
          </div>
        </div>
        <div className="col d-flex gap-3 justify-content-end">
          <Button
            child="Profile"
            style={{
              color: "#fff",
              marginTop: "5px",
              backgroundColor: "#5E50A1",
              fontSize: "14px",
            }}
            onClick={handleRoute}
          />
          <Button
            child="Logout"
            style={{
              color: "#fff",
              marginTop: "5px",
              backgroundColor: "#5E50A1",
              fontSize: "14px",
            }}
            onClick={handleRemoveToken}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavLogin;
