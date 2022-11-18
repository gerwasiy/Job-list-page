import Image from "next/image";
import MainLayout from "../components/MainLayout";
import Link from "next/link";
import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import usePagination from "../hooks/usePagination";
import CalculateDays from "../components/СalculateDays";
import { JobsModel } from "../models/JobsModel";

export default function JobsBoard({jobs}: JobsModel) {
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 15,
    count: jobs.length,
  });

  return (
    <div className="flex items-center flex-col">
      <MainLayout title={"Jobs"} />
      <div className="job-board flex gap-2 flex-col p-4 ">
        {Array.isArray(jobs)
          ? jobs.slice(firstContentIndex, lastContentIndex).map((job) => (
              <div
                key={job.id}
                className="job-card grid items-center lg:grid-cols-10 px-4 py-6 rounded-lg gap-8 shadow  max-w-1400 relative "
              >
                <div className="flex gap-6 md:col-span-5">
                  <Image
                    className="logo self-center rounded-full min-w-[6rem] h-24 justify-self-center"
                    width={80}
                    height={80}
                    src={job.pictures[0] + `?random=${job.id}`}
                    alt="logo"
                  />
                  <div className="content flex flex-col gap-2">
                    <Link href={`/jobs/[id]`} as={`/jobs/${job.id}`}>
                      <h2 className=" text-slate-700 font-bold text-xl">
                        {job.title}
                      </h2>
                    </Link>
                    <p className=" text-gray-400 font-light">{job.name}</p>
                    <span className=" text-gray-400 font-light">
                      {" "}
                      <FontAwesomeIcon icon={faLocationDot} /> Vienna, Austria
                    </span>
                  </div>
                </div>
                <div className="rating col-start-8 w-max">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="flex flex-col h-3/4 justify-between items-end absolute right-4 ">
                  <FontAwesomeIcon
                    className="mark text-xl bg-slate-50"
                    icon={faBookmark}
                  />

                  <span className="time text-[#878D9D]">
                    {CalculateDays(job.createdAt)}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="items-center w-min flex px-4 py-6 rounded-lg gap-8 h-12 shadow">
        <button
          onClick={prevPage}
          className="py-4 pl-4 pr-8 after:content-[''] after:h-8 after:w-[1.3px] relative after:absolute after:right-0 after:bottom-3 after:bg-[#DEE3EF]"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        {/* @ts-ignore */}
        {[...Array(totalPages).keys()].map((el) => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${
              page === el + 1
                ? "relative font-bold text-[#5876C5] p-[auto] after:content-[''] after:w-8 after:h-1 after:absolute after:bottom-[-12px] after:left-[-11px] after:bg-[#5876C5]"
                : "font-bold"
            }`}
          >
            {el + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          className=" py-4 pl-8 pr-4 after:content-[''] after:h-8 after:w-[1.3px] relative after:absolute after:left-0 after:bottom-3 after:bg-[#DEE3EF]"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

JobsBoard.getInitialProps = async () => {
  const response = await fetch("http://localhost:4000/jobs");
  const jobs = await response.json();

  return {
    jobs
  };
};
