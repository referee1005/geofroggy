import React, { useEffect } from "react";
import Note from "@/components/contact/Note";
import Info from "@/components/contact/Info";
import Subscribe from "@/components/shared/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactRequest } from "@/actions/contact";

export default function Home() {
  const data = useSelector((state) => state.contact.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactRequest());
  }, [dispatch]);

  return (
    <div className="mx-auto">
      <Note />
      <Info data={data} />
      <Subscribe bgColor={"#245073"} />
    </div>
  );
}
