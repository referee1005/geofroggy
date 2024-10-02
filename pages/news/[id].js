import React, { useEffect } from "react";
import NewsDetail from "@/components/news/detail";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewRequest, fetchTrendsRequest } from "@/actions/news";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const data = useSelector((state) => state.news.new);
  const dispatch = useDispatch();

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchNewRequest(id));
  }, [dispatch]);

  return (
    <div className="mx-auto flex container-custom bg-custom-bg-primary">
      <NewsDetail data={data} />
    </div>
  );
}
