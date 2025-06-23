import Card from "./Card";
import { Link } from "react-router";

const HomeCards = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 p-5">
      {/* <Card
        title="For Developers"
        subtitle="Browse our React jobs and start your career today"
        btnName="Browse Jobs"
        bgColor="DDDDDD"
        btnBgColor="2C2C2C"
      />

      <Card
        title="For Employers"
        subtitle="List your job to find the perfect developer for the role"
        btnName="Add Job"
        bgColor="C4E1E6"
        btnBgColor="3674B5"
      /> */}

      {/* You can also do this like this: */}
      <Card>
        <h2 className="text-xl font-bold">For Developers</h2>
        <p className="text-sm">
          Browse our React jobs and start your career today
        </p>
        <Link
          to="/jobs"
          className={`pt-1 pb-1 pr-3 pl-3 text-white font-semibold rounded-lg cursor-pointer bg-[#2C2C2C] hover:bg-black text-center`}
        >
          Browse Job
        </Link>
      </Card>

      <Card bg="bg-indigo-100">
        <h2 className="text-xl font-bold">For Employers</h2>
        <p className="text-sm">
          List your job to find the perfect developer for the role
        </p>
        <Link
          to="/add-job"
          className={`pt-1 pb-1 pr-3 pl-3 text-white font-semibold rounded-lg cursor-pointer bg-indigo-500 hover:bg-indigo-700 text-center`}
        >
          Add Job
        </Link>
      </Card>
    </div>
  );
};

export default HomeCards;
