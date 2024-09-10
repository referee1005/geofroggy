import React, { useEffect } from "react";
import SearchBar from "@/components/job/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobOptionsRequest } from "@/actions/job";
export default function Home() {
  const options = useSelector((state) => state.job.options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobOptionsRequest());
  }, [dispatch]);
  return (
    <div className="mx-auto">
      <SearchBar options={options} />
    </div>
  );
}
