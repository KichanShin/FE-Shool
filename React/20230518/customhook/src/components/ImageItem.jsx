import React from "react";

export default function ImageItem({ img }) {
  return <img src={img.url} alt="" style={{ width: 400, height: 250 }} />;
}
