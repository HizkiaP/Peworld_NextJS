"use client"

import Footer from '@/components/module/Footer';
import NavBar from '@/components/module/NavBar';
import Avatar from "/assets/profile-avatar.png";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const NotifRecruiter = () => {
    const [data, setData] = useState();

  const handleRecruiterNotification = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/hire/recruiters`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      console.log("RESULT NOTIF RECRUITER = ", result.data);
      setData(result.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    handleRecruiterNotification()
  }, [])
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
              <div style={{ marginTop: "20px" }}>
                <p>{`Worker Name : ${item.name_request_hire}`}</p>
                <p>{`Worker Email : ${item.email_request_hire}`}</p>
                <p>{`Worker Phonenumber : ${item.phone_request_hire}`}</p>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </>
  )
}

export default NotifRecruiter