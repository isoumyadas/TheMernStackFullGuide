import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const githubData = useLoaderData();
  //   const [githubData, setGithubData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/isoumyadas")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setGithubData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl flex gap-4 ">
      <img className="" src={githubData.avatar_url} />
      <p>
        <span className="font-bold text-orange-400">Github Followers:</span>{" "}
        {githubData.followers}
      </p>
      <p>
        <span className="font-bold text-orange-400">User Bio: </span>
        {githubData.bio}
      </p>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/isoumyadas");
  return res.json();
};
