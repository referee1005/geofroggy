import React, { useEffect } from "react";
import Support from "@/components/privacy/Support";
import Content from "@/components/privacy/Content";
export default function Home() {
  return (
    <div className="mx-auto">
      <Support />
      <Content />
    </div>
  );
}
