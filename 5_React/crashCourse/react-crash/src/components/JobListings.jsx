import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // const jobListings = isHome ? data.slice(0, 3) : data;
        setJobs(data);
      } catch (error) {
        console.error("Error while fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);
  return (
    <div className="bg-blue-100 flex flex-col gap-6 p-5 mt-8 rounded-t-lg">
      <h2 className="text-center font-bold text-3xl text-blue-700">
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListings;
