import Link from "next/link";
import Image from "next/image";
import logoNav from "/assets/Group 978 1.png";
import styles from './footer.module.css'
import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#5E50A1" }}>
        <div className="container ">
      <div className="row w-100">
        <div className="col mt-5">
          <Link href="/">
            <Image src={logoNav} alt="Bootstrap" width="178" height="50" />
          </Link>
          <div className={`${styles.wrapText} mt-4`}>
            <p className={styles.text}>
            Temukan talenta unggulan dengan Peworld. Pengalaman rekrutmen yang efisien dan terpercaya untuk memperkuat tim Anda.
            </p>
          </div>
          <div className={styles.line}></div>
          <div className="d-flex justify-content-between mt-4">
            <div>
              <p style={{ color: "#fff",  fontWeight: "200"}}>2020 Pewworld. All right reserved</p>
            </div>
            <div className="d-flex gap-5">
              <li className={styles.list}>Telepon</li>
              <li className={styles.list}>Email</li>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Footer;
