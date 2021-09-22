import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const FakeData = () => {
  const [fakeData, setFakeData] = useState([]);
  useEffect(() => {
    fetch("generateObj.json")
      .then((res) => res.json())
      .then((data) => setFakeData(data));
  }, []);
  return (
    <div>
      {fakeData.map((fkData) => (
        <SingleData key={fkData._id} datas={fkData}></SingleData>
      ))}
    </div>
  );
};

export default FakeData;
