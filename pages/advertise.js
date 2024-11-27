import Advert from "@/components/advertise/Advert";
import Partner1 from "@/components/advertise/Partner1";
import Partner2 from "@/components/advertise/Partner2";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdvirtiseBodyRequest,
  fetchAdvirtiseSocialRequest,
  fetchAdvirtisePlansRequest,
} from "@/actions/advertise";

import { useEffect } from "react";

export default function Home() {
  const body = useSelector((state) => state.advertise.body);
  const social = useSelector((state) => state.advertise.social);
  const plans = useSelector((state) => state.advertise.plans);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvirtiseBodyRequest());
    dispatch(fetchAdvirtiseSocialRequest());
    dispatch(fetchAdvirtisePlansRequest());
  }, [dispatch]);

  return (
    <div className="mx-auto container-custom">
      <Advert body={body} social={social} />
      <Partner1 plans={plans} />
      <Partner2 />
    </div>
  );
}
