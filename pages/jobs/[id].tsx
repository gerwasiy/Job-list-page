import {
  faBookmark,
  faEuroSign,
  faShareNodes,
  faAngleLeft,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import howLong from "../../components/СalculateDays";

import Image from "next/image";
import Link from "next/link";
import FormatingDesc from "../../components/FormatingDesc";
import { JobModel } from "../../models/JobModel";


export default function JobDeatailed( {job} : JobModel) {
  let geoMap: string = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${job.location.long},${job.location.lat}&zoom=14.5&marker=lonlat:${job.location.long},${job.location.lat};color:%23d8d8d8;size:medium&geometry=circle:${job.location.long},${job.location.lat},500;fillcolor:%23333a52;fillopacity:0.2&apiKey=6cef0b34158d4aa2b78aa1a401700d70`;
  return (
    <div className="flex max-md:flex-col max-md:items-center md:flex-row justify-between mx-10 py-14">
      <div className="gap-[130px]">
        <header className="flex justify-between border-b py-3 items-center">
          <h1 className="font-bold text-3xl">Job Details</h1>
          <div className="flex gap-8 max-md:hidden ">
            <button>
              <FontAwesomeIcon className=" text-xl" icon={faBookmark} /> Save to
              my list
            </button>
            <button>
              <FontAwesomeIcon className=" text-xl" icon={faShareNodes} /> Share
            </button>
          </div>
        </header>
        <main className="max-md:flex flex-col max-w-[721px]">
          <div>
            <div className="flex gap-8 md:hidden py-7 ">
              <button>
                <FontAwesomeIcon className=" text-xl" icon={faStar} /> Save to
                my list
              </button>
              <button>
                <FontAwesomeIcon className=" text-xl" icon={faShareNodes} />{" "}
                Share
              </button>
            </div>
          </div>
          <button className="max-md:w-max max-md:self-center max-md:order-2 my-10 py-5 px-8 bg-[#384564] text-[#F5F5F5] rounded-lg font-semibold">
            APPLY NOW
          </button>
          <section className="max-md:flex-col  flex justify-between">
            <div>
              <h2 className="font-bold text-2xl">{job.title}</h2>
              <span className="text-[#878D9D] max-md:hidden max-md:text-sm text-lg">
                {howLong(job.createdAt)}
              </span>
            </div>
            <div className="flex self-end max-md:w-[100%] justify-between items-center max-md:py-2">
              <span className="text-[#878D9D] max-md:text-sm md:hidden text-lg">
                {howLong(job.createdAt)}
              </span>
              <div className="min-w-max  flex flex-col max-md:flex-col-reverse ">
                <span className="text-xl font-bold w-max">
                  <FontAwesomeIcon icon={faEuroSign} />{" "}
                  {job.salary.replace(/k/gi, "000")}
                </span>

                <span className="text-lg">Brutto, per year</span>
              </div>{" "}
            </div>
          </section>
          <section className="">{FormatingDesc(job.description)}</section>
          <section className="max-md:flex flex-col order-3">
            <div className="order-1">
              <h2 className="border-b font-bold text-3xl md:pt-[90px] pb-[10px]">
                Additional info
              </h2>
              <div>
                <h3 className=" text-lg font-normal py-4">Employment type</h3>
                <div className="flex gap-[10px]">
                  {job.employment_type.map((el: string, id: number) => (
                    <span
                      key={id}
                      className=" max-md:w-max max-md:px-4 w-[222px] h-12 border border-[#b7c0da] flex justify-center items-center font-bold rounded-lg bg-[#e1e6f4] text-[#55699E]"
                    >
                      {el}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className=" text-lg font-normal py-4">Benefits</h3>
                <div className="flex gap-[10px]">
                  {job.benefits.map((el: string, id: number) => (
                    <span
                      key={id}
                      className="max-md:w-max max-md:px-4 w-[222px] h-12 border border-[#FFCF00] flex justify-center items-center font-bold rounded-lg bg-[#fff8d9] text-[#988B49]"
                    >
                      {el}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="border-b font-bold text-3xl pt-[90px] pb-[10px]">
                Attached images
              </h2>
              <div className="flex gap-[10px] mt-[20px] mb-[100px]">
                {job.pictures.map((el: string, id: number) => (
                  <Image
                    className="w-[200px] h-[116px] rounded-lg"
                    key={id}
                    width={100}
                    height={100}
                    alt="picture"
                    src={`${el}?random=${id}${job.id}`}
                  />
                ))}
              </div>
            </div>
          </section>
          <Link
            href={"/"}
            className="max-md:order-3 max-md:mt-10 h-[50px] w-[213px] rounded-lg bg-[#e4e5ea] flex justify-center items-center text-xs font-semibold gap-5"
          >
            <FontAwesomeIcon className=" text-xl" icon={faAngleLeft} />
            RETURN TO JOB BOARD
          </Link>
        </main>
      </div>

      <aside className=" w-[402px]">
        <h1 className="md:hidden font-bold text-3xl border-b mt-16 pb-3 mb-5">
          Contacts
        </h1>
        <div className="px-16 py-8 flex flex-col gap-2 text-[#E7EAF0] bg-[#2A3047] rounded-t-lg after:">
          <h2 className=" font-bold text-xl">{job.name}</h2>
          <p className="flex gap-2 ">
            <FontAwesomeIcon
              className="text-[#D8D8D8] text-xl"
              icon={faLocationDot}
            />
            {job.address}
          </p>
          <span>{job.phone}</span>
          <span>{job.email}</span>
        </div>

        <Image
          className="rounded-b-lg"
          width={402}
          height={100}
          src={geoMap}
          alt="map"
        />
      </aside>
    </div>
  );
}

JobDeatailed.getInitialProps = async (ctx: any) => {
  const response = await fetch(` http://localhost:4000/jobs/${ctx.query.id}`);

  const job = await response.json();

  return {
    job,
  };
};
