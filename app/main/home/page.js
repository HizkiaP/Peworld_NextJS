"use client";
import CardBody from "@/components/module/CardBody";
import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import React, { useEffect, useState } from "react";
import { PiMapPin } from "react-icons/pi";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  // const { data, error, isLoading } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_URL}/workers`,
  //   fetcher
  // );
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/workers`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />
      {data &&
        data.map((item, index) => (
          <CardBody
            key={index}
            style={{ marginLeft: "7rem", marginRight: "7rem" }}
          >
            <h4>{item.name}</h4>
            <p>Job: {item.job_desk || "-"}</p>
            <div className="d-flex gap-2">
              <div>
                <PiMapPin style={{ color: "#9EA0A5" }} />
              </div>
              <div style={{ marginTop: "3.5px" }}>
                <p
                  style={{
                    color: "#9EA0A5",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  {item.domicile || "-"}
                </p>
              </div>
            </div>
            {/* <p>{JSON.stringify(data)}</p> */}
          </CardBody>
        ))}
      <Footer />
    </>
  );
};

export default Home;
