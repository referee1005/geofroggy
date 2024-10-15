import React, { useEffect } from "react";
import NewsList from "@/components/news/list";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsRequest, fetchLatestArticlesRequest } from "@/actions/news";

export default function Home() {
  const news = useSelector((state) => state.news.news);
  const latestArticles = useSelector((state) => state.news.latestArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsRequest());
    dispatch(fetchLatestArticlesRequest());
  }, [dispatch]);

  return (
    <div className="mx-auto">
      <NewsList news={news} latestArticles={latestArticles} />
    </div>
  );
}
