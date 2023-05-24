import React, { useEffect, useState } from "react";
import TestBox from "./components/TestBox";
import ImageList from "./components/ImageList";
import useScrollBottom from "./hooks/useScrollBottom";

function App() {
  const [imageList, setImageList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const isBottom = useScrollBottom();

  useEffect(() => {
    fetchImages();
  }, [fetchPage]);

  useEffect(() => {
    if (isBottom) {
      setFetchPage((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [isBottom]);

  async function fetchImages() {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${fetchPage}&limit=5`
      );
      if (!response.ok) {
        throw new Error("네트워에 문제가 있습니다.");
      }
      const data = await response.json();
      // console.log(data);
      setImageList(data);
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }

  return (
    <div>
      hello world
      <ImageList imageList={imageList} />
    </div>
  );
}
export default App;
