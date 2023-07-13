'use client';

import React from "react";
import { ImpressionDiv } from "@/components/ImpressionDiv";

function Page() {
  return (
    <div>
      <h1 className="text-xl">Async Page</h1>
      {[...Array(10)].map((e, i) => {
        return <ImpressionDiv ordinal={i} key={i} />;
      })}
    </div>
  );
}

export default Page