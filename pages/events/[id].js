import React, { useEffect } from "react";
import EventDetail from "@/components/events/detail";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventRequest } from "@/actions/news";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const data = useSelector((state) => state.news.event);
  const dispatch = useDispatch();

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchEventRequest(id));
  }, [dispatch]);

  return (
    <div className="mx-auto bg-custom-bg-primary">
      <EventDetail data={data} />
    </div>
  );
}
