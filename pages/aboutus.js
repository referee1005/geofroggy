import React, { useEffect } from "react";
import Whoweare from "@/components/about/Whoweare";
import Thumbnails from "@/components/about/Thumbnails";
import OurVideo from "@/components/about/Ourvideo";
import Subscribe from "@/components/shared/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { fetchSiteInfoRequest } from "@/actions/about";

export default function Home() {
  const data = useSelector((state) => state.about.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSiteInfoRequest());
  }, [dispatch]);
  return (
    <div className="mx-auto">
      <Whoweare data={data} />
      <Thumbnails data={data.advert} />
      <OurVideo />
      <Subscribe bgColor={"#245073"} />
    </div>
  );
}
