import React, { useEffect } from "react";
import Part1 from "@/components/sponsor/Part1";
import Part2 from "@/components/sponsor/Part2";
import Part3 from "@/components/sponsor/Part3";
import Part4 from "@/components/sponsor/Part4";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSponsorRequest,
  fetchSponsorFaqRequest,
  fetchSponsorTeamRequest
} from "@/actions/sponsor";
// import Donate from "@/components/donate/now/Donate";
export default function Home() {
  const sponsor = useSelector((state) => state.sponsor.sponsor);
  const sponsor_faq = useSelector((state) => state.sponsor.sponsor_faq);
  const sponsor_team = useSelector((state) => state.sponsor.sponsor_team);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSponsorRequest());
    dispatch(fetchSponsorFaqRequest());
    dispatch(fetchSponsorTeamRequest());
  }, [dispatch]);

  return (
    <div className="mx-auto ">
      <Part1 data={sponsor[0]} />
      <Part2 data={sponsor[0]} />
      <Part3 data={sponsor_team} />
      <Part4 data={sponsor_faq} />
    </div>
  );
}
