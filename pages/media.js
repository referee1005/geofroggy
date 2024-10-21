import React, { useEffect } from "react";
import MediaAdvert from "@/components/media/Advert";
import Curate from "@/components/media/Curate";
import Details from "@/components/media/Details";
import Info from "@/components/contact/Info";
import Subscribe from "@/components/shared/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactRequest } from "@/actions/contact";

export default function Home() {
  // const data = useSelector((state) => state.contact.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContactRequest());
  // }, [dispatch]);

  return (
    <div className="mx-auto">
      <MediaAdvert />
      <Curate />
      <Details />
    </div>
  );
}
