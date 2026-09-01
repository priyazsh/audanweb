"use client";

import { useEffect } from "react";
import Script from "next/script";

interface TweetCardProps {
  url: string;
}

export default function TweetCard({ url }: TweetCardProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load();
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-center py-2">
      <div className="w-full max-w-[500px] flex items-center justify-center">
        <blockquote
          className="twitter-tweet"
          data-theme="light"
          data-dnt="true"
          data-align="center"
          data-conversation="none"
        >
          <a href={url}></a>
        </blockquote>
      </div>

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).twttr?.widgets) {
            (window as any).twttr.widgets.load();
          }
        }}
      />
    </div>
  );
}
