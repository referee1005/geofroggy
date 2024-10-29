import Advert from "@/components/donate/Advert";
import Donate from "@/components/donate/Donate";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonateRequest } from "@/actions/donate";
import { useEffect } from "react";

export default function Home() {
  const data = useSelector((state) => state.donate.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDonateRequest());
  }, [dispatch]);

  return (
    <div className="mx-auto">
      <Advert data={data[0]} />
      <Donate data={data[0]} />
    </div>
  );
}
