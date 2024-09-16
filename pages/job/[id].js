import React, { useEffect } from "react";
import JobDetail from "@/components/job/detail";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobDetailRequest } from "@/actions/job";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const job = useSelector((state) => state.job.job);
  const dispatch = useDispatch();

  const { id } = router.query;
  useEffect(() => {
    dispatch(fetchJobDetailRequest(id));
  }, [dispatch]);

  return (
    <div className="mx-auto flex " style={{ backgroundColor: "#f3f5f7" }}>
      {/* <JobDetail data={job} /> */}
    </div>
  );
}
