import React from "react";
import { useParams } from "react-router";

function User() {
  const { userid } = useParams(); // using you can call something from DB etc
  return (
    <div className="bg-gray-600 text-white p-4 text-3xl text-center">
      User: {userid}
    </div>
  );
}

export default User;
