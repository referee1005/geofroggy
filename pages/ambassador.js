import React, { useEffect } from "react";
import Ambassador from "@/components/ambassador";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobDetailRequest } from "@/actions/job";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const job = useSelector((state) => state.job.job);
  const dispatch = useDispatch();

  const { slug } = router.query;

  useEffect(() => {
    dispatch(fetchJobDetailRequest(slug));
  }, [dispatch]);

  return (
    <div className="mx-auto flex " style={{ backgroundColor: "#f3f5f7" }}>
      <Ambassador data={job} />
    </div>
  );
}
