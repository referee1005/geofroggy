import React, { useEffect } from "react";
import SearchBar from "@/components/job/list/SearchBar";
import SearchResults from "@/components/job/list/SearchResults";
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
      className="mx-auto flex flex-col sm:flex-row container-custom py-4 "
      style={{ backgroundColor: "#f3f5f7" }}
    >
      <div className="w-full sm:w-[45%] md:w-1/3 xl:w-1/4">
        <SearchBar options={options} />
      </div>
      <div className="flex-1 sm:ml-4">
        <SearchResults />
      </div>
    </div>
  );
}
