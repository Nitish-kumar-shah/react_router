import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="flex place-content-center bg-teal-400  py-30 text-4xl font-extrabold">
      User: {userid}
    </div>
  );
};

export default User;
