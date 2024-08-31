import React, { useEffect } from "react";
import Support from "@/components/faq/Support";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaqRequest } from "@/actions/faq";
import Advice from "@/components/faq/Advice";
import Faqs from "@/components/faq/Faqs";
// import Thumbnails from "@/components/about/Thumbnails";
// import OurVideo from "@/components/about/Ourvideo";
// import Subscribe from "@/components/shared/Subscribe";

export default function Home() {
  const data = useSelector((state) => state.faq.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFaqRequest());
  }, [dispatch]);

  return (
    <div className="mx-auto">
      {/* <Support />
      <Advice data={data.advice_answers} />
      <Faqs title="General FAQs" data={data.general_faqs} />
      <Faqs title="Geography FAQs" data={data.geography_faqs} /> */}
      {/* <Thumbnails />
      <OurVideo />
      <Subscribe bgColor={"#245073"} /> */}
    </div>
  );
}
