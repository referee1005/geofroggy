import React, { useEffect } from "react";
import NewsList from "@/components/news/list";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsRequest } from "@/actions/news";

export default function Home() {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsRequest());
  }, [dispatch]);

  return (
    <div className="mx-auto">
      <NewsList data={news} />
    </div>
  );
}
