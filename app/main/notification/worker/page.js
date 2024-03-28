"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Avatar from "/assets/profile-avatar.png";
import NavBar from "@/components/module/NavBar";
import Footer from "@/components/module/Footer";

const NotifWorker = () => {
  const [data, setData] = useState();

  const handleWorkerNotification = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/hire/workers`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      console.log("RESULT NOTIF WORKER = ", result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleWorkerNotification();
  }, []);
  return (
    <>
      <NavBar />
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <div className="d-flex mt-4 mb-4" style={{ marginLeft: "7rem", marginRight: "7rem" }}>
              <Image
                src={Avatar}
                alt="Profile Photo"
                width={150}
                height={150}
              />
              <div style={{ marginTop: "5px" }}>
                <h2>{item.message_purpose}</h2>
                <p>{`Recruiter Name : ${item.recruiter_name}`}</p>
                <p>{`Recruiter Company : ${item.recruiter_company}`}</p>
                <p>{item.recruiter_position}</p>
                <p>{`Description : ${item.desciption_request_hire}`}</p>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </>
  );
};

export default NotifWorker;
