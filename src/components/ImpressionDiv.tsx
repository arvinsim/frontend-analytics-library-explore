import React, { useEffect } from "react";
import * as qs from "querystring";

type ImpressionDivProps = {
  ordinal?: number;
  useImg?: boolean;
};

export function ImpressionDiv(props: ImpressionDivProps) {
  useEffect(() => {
    const url = "http://localhost:3001/api/analytics";

    const sendAnalytics = async () => {
      await fetch(url, { method: "POST" });
      console.log("analytics via POST sent");
    };

    function sendAnalyticsViaImg() {
      new Image().src = url;
      console.log("analytics via img sent");
    }

    if (props.useImg) {
      sendAnalyticsViaImg();
    } else {
      sendAnalytics();
    }
  });

  return <div>ImpressionDiv {props.ordinal ? props.ordinal : "-1"}</div>;
}
