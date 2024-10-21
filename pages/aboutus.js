import React, { useEffect } from "react";
import Whoweare from "@/components/about/Whoweare";
import Thumbnails from "@/components/about/Thumbnails";
import OurVideo from "@/components/about/Ourvideo";
import Subscribe from "@/components/shared/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { fetchSiteInfoRequest, fetchAboutAdvertRequest } from "@/actions/about";

export default function Home() {
  const data = useSelector((state) => state.about.data);
  const advert = useSelector((state) => state.about.advert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSiteInfoRequest());
    dispatch(fetchAboutAdvertRequest());
  }, [dispatch]);
  return (
    <div className="mx-auto">
      {data[0] !== undefined && <Whoweare data={data[0]} />}
      <Thumbnails data={advert} />
      {data[0] !== undefined && <OurVideo data={data[0]} />}
      <Subscribe bgColor={"#245073"} />
    </div>
  );
}
