import React from "react";
import { addDb, removeItem } from "../../utilities/FakeBD";

const SingleData = (props) => {
  const { about, email, greeting, _id } = props.datas;
  const handlePurchase = (id) => {
    console.log(id);
    // set to local storage
    addDb(id);
  };
  const handleRemove = (id) => {
    removeItem(id);
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>{_id}</h1>
        <h4>{about}</h4>
        <p>{email}</p>
        <h5>{greeting}</h5>
        <button onClick={() => handlePurchase(_id)}>purchase</button>
        <button onClick={() => handleRemove(_id)}>remove</button>
      </div>
    </div>
  );
};

export default SingleData;
