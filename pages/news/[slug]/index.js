import React, { useEffect } from "react";
import NewsDetail from "@/components/news/detail";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewRequest, fetchTrendsRequest } from "@/actions/news";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const data = useSelector((state) => state.news.new);
  const dispatch = useDispatch();
  // const [queryReady, setQueryReady] = useState(false);
  // const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query;
      if (slug) {
        dispatch(fetchNewRequest(slug));
      }
    }
  }, [router.isReady, router.query, dispatch]);

  return (
    <div className="mx-auto flex container-custom bg-custom-bg-primary">
      {data[0] !== undefined && <NewsDetail data={data[0]} />}
    </div>
  );
}
