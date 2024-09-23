import React, { useEffect } from "react";
import Support from "@/components/privacy/Support";
import Content from "@/components/privacy/Content";
export default function Home() {
  return (
    <div className="mx-auto">
      <Support />
      <Content />
      {/* <Advice data={data.advice_answers} />
      <Faqs title="General FAQs" data={data.general_faqs} />
      <Faqs title="Geography FAQs" data={data.geography_faqs} /> */}
    </div>
  );
}
