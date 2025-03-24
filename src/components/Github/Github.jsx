import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/nitish-kumar-shah")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-500 text-white">
      Github followrs: {data.followers}
      <img src={data.avatar_url} alt="profile" width={150} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/nitish-kumar-shah"
  );
  return response.json();
};
