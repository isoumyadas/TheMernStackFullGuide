import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router";

const JobListing = ({ job }) => {
  const [showFullDes, setShowFullDes] = useState(false);

  let description = job.description;

  if (!showFullDes) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="bg-white p-3 flex flex-col gap-2 rounded-lg">
      <p>{job.type}</p>
      <h2 className="text-lg font-extrabold">{job.title}</h2>

      <p className="mt-3 mb-3">{description}</p>
      {/* Here we added update the state for more and less description */}
      <div
        onClick={() => setShowFullDes((prevState) => !prevState)}
        className="text-indigo-500 mb-5 hover:text-indigo-600 cursor-pointer w-fit"
      >
        {showFullDes ? "less" : "more"}
      </div>

      <p className="text-blue-700">{job.salary}</p>

      <p className="text-red-800">
        <FaMapMarker className="inline text-lg mr-3" />
        {job.location}
      </p>
      <Link
        to={`/jobs/${job.id}`}
        className="pt-1 pb-1 pr-6 pl-6 bg-blue-600 text-center text-white font-semibold rounded-md hover:bg-blue-900"
      >
        Read More
      </Link>
    </div>
  );
};

export default JobListing;
