import React from "react";
import AssigdnedItems from "./AssigdnedItems";

export default function listAssigned({ data }) {
  console.log(data);
  return (
    <ul>
      {data.map((assign, index) => (
        <AssigdnedItems key={index} assign={assign} />
      ))}
    </ul>
  );
}
