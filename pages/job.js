import React, { useEffect } from "react";
import SearchBar from "@/components/job/SearchBar";
import SearchResults from "@/components/job/SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobOptionsRequest } from "@/actions/job";
export default function Home() {
  const options = useSelector((state) => state.job.options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobOptionsRequest());
  }, [dispatch]);

  return (
    <div
      className="mx-auto flex container-custom py-4 "
      style={{ backgroundColor: "#f3f5f7" }}
    >
      <div className="w-1/4">
        <SearchBar options={options} />
      </div>
      <div className="flex-1 ml-4">
        <SearchResults />
      </div>
    </div>
  );
}
