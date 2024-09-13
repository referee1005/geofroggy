import React, { useEffect } from "react";
import Part1 from "@/components/sponsor/Part1";
import Part2 from "@/components/sponsor/Part2";
import Part3 from "@/components/sponsor/Part3";
import Part4 from "@/components/sponsor/Part4";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaqRequest } from "@/actions/faq";
// import Donate from "@/components/donate/now/Donate";
export default function Home() {
  const data = useSelector((state) => state.faq.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFaqRequest("category=donate"));
  }, [dispatch]);

  return (
    <div className="mx-auto ">
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 data={data["general_faqs"]} />
    </div>
  );
}
