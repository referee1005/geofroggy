import React, { useEffect } from "react";
import SearchBar from "@/components/job/list/SearchBar";
import SearchResults from "@/components/job/list/SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPositionsRequest, fetchJobTagsRequest } from "@/actions/job";
export default function Home() {
  const positions = useSelector((state) => state.job.positions);
  const tags = useSelector((state) => state.job.tags);
  const [query, setQuery] = React.useState({
    "tags[]": [],
    keyword: null,
    salary: [0, 5000],
    "positions[]": [],
    per_page: 10,
    page_no: 1,
    sort: "A-Z"
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobPositionsRequest());
    dispatch(fetchJobTagsRequest());
  }, [dispatch]);

  const onChangeQuery = (value) => {
    setQuery(value);
  };

  return (
    <div
      className="mx-auto flex flex-col sm:flex-row container-custom py-4 "
      style={{ backgroundColor: "#f3f5f7" }}
    >
      <div className="w-full sm:w-[45%] md:w-1/3 xl:w-1/4">
        <SearchBar
          positions={positions}
          tags={tags}
          onChangeQuery={onChangeQuery}
        />
      </div>
      <div className="flex-1 sm:ml-4">
        <SearchResults initialQuery={query} />
      </div>
    </div>
  );
}
