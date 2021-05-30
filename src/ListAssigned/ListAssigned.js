import React from "react";
import AssigdnedItems from "./AssigdnedItems";

export default function listAssigned({ data }) {
  data.forEach((el) => {
    console.log(el);
  });
  console.log(data);
  return (
    <ul>
      <div>block</div>
      {data.map((assign, index) => (
        <AssigdnedItems key={index} assigned={assign} />
      ))}
    </ul>
  );
}
