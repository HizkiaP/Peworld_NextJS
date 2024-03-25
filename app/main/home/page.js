"use client";
import CardBody from "@/components/module/CardBody";
import Footer from "@/components/module/Footer";
import NavBar from "@/components/module/NavBar";
import React, { useEffect, useState } from "react";
import { PiMapPin } from "react-icons/pi";
import Avatar from "/assets/profile-avatar.png";
import useSWR from "swr";
import Image from "next/image";
import Button from "@/components/base/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Pagination from "@/components/module/Pagination";
import Input from "@/components/base/Input";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  // const { data, error, isLoading } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_URL}/workers`,
  //   fetcher
  // );
  const router = useRouter();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("ASC");
  const [sort, setSort] = useState("name");

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/workers/?limit=${limit}&search=${search}&sort=${sort}&sortBy=${sortBy}&page=${page}`,
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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getData();
  }, [search, sort, sortBy, page]);

  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center">
        <div className="d-flex mb-4">
          <Input
            className=""
            placeholder="Search for any skill"
            value={search}
            onChange={handleSearchChange}
            style={{ borderRadius: "4px" }}
          />
          {/* <button
              className="w-32 h-50 bg-purple-800 rounded-r text-white ml-5"
              onClick={() => handlePageChange(1)}
            >
              Search
            </button> */}
          <select
            className="ms-2"
            onChange={handleSortOrderChange}
            value={sortBy}
            style={{
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 12,
              paddingRight: 12,
              borderColor: "#C5C5C540",
              height: "45px",
              marginTop: "24px",
              borderRadius: "4px"
            }}
          >
            <option selected>Sort</option>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
          <Button
            child="Search"
            onClick={() => handlePageChange(1)}
            style={{ backgroundColor: "#5E50A1", color: "#fff", height: "45px", marginTop: "24px" }}
            className="ms-2"
          />
        </div>
      </div>

      {data &&
        data.map((item, index) => (
          <CardBody
            key={index}
            style={{ marginLeft: "7rem", marginRight: "7rem" }}
          >
            <div className="d-flex">
              <div className="d-flex gap-3 col-10">
                <Image
                  src={Avatar}
                  alt="Profile Photo"
                  width={150}
                  height={150}
                />
                <div style={{ marginTop: "30px" }}>
                  <h4>{item.name}</h4>
                  <p>Job: {item.job_desk || "-"}</p>
                  <div className="d-flex gap-2">
                    <PiMapPin style={{ color: "#9EA0A5" }} />
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
              </div>
              <div>
                <Link href={`/main/profile/worker/portofolio/${item.id}`}>
                  <Button
                    child="Lihat Profile"
                    style={{
                      backgroundColor: "#5E50A1",
                      color: "#fff",
                      width: "120px",
                      height: "44px",
                      marginTop: "60px",
                      // marginLeft: "500px",
                    }}
                    // onClick={() => router.push(`/main/profile/worker/portofolio/${data.id}`)}
                  />
                </Link>
              </div>
            </div>
            {/* <p>{JSON.stringify(data)}</p> */}
          </CardBody>
        ))}
      <Pagination
        data={data}
        itemPerPage={2}
        onPageChange={handlePageChange}
      />
      <Footer />
    </>
  );
};

export default Home;
