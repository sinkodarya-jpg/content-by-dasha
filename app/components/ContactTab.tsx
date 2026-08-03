"use client";

import { useState } from "react";

export default function ContactsTab() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(
      "tookbydasha@gmail.com"
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2">

      {/* Background + Content */}
      <div className="relative grid">

        {/* Background */}
        <img
          src="/images/contacts/say-hello.png"
          alt=""
          className="col-start-1 row-start-1 block w-full select-none"
        />

        {/* Content */}
        <div className="col-start-1 row-start-1 flex flex-col items-center pt-32 md:pt-60">

          {/* Email */}
          <div className="relative">

            {/* Copied */}
            <span
              className={`absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 transition-all duration-300 ${
                copied
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1 opacity-0"
              }`}
            >
              Copied to clipboard
            </span>

            <button
              onClick={copyEmail}
              className="group relative inline-flex cursor-pointer items-center justify-center overflow-visible px-4 py-1 text-[30px] font-bold leading-none text-neutral-900 md:text-[44px]"
            >

              {/* Highlight */}
              <span
                className="
                  absolute
                  left-0
                  top-1/2
                  z-0
                  h-[1.15em]
                  w-full
                  origin-left
                  -translate-y-1/2
                  scale-x-0
                  bg-black/10
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              {/* Left marker */}
              <span
                className="
                  absolute
                  left-0
                  top-1/2
                  h-[1.15em]
                  w-px
                  -translate-y-1/2
                  bg-black
                  opacity-0
                  transition-opacity
                  duration-150
                  group-hover:opacity-100
                "
              >
                <span className="absolute -top-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-black" />
                <span className="absolute -bottom-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-black" />
              </span>

              {/* Right marker */}
              <span
                className="
                  absolute
                  right-0
                  top-1/2
                  h-[1.15em]
                  w-px
                  -translate-y-1/2
                  bg-black
                  opacity-0
                  transition-opacity
                  duration-150
                  delay-100
                  group-hover:opacity-100
                "
              >
                <span className="absolute -top-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-black" />
                <span className="absolute -bottom-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-black" />
              </span>

              <span className="relative z-10">
                tookbydasha@gmail.com
              </span>

            </button>

          </div>

          {/* Description */}
          <div className="mt-8 max-w-[340px] px-6 text-center text-[13px] leading-[1.45] text-neutral-700 md:mt-12 md:max-w-[430px] md:px-0 md:text-[18px] md:leading-[1.35]">

            <p>
              have an idea for a collaboration, a gift you'd love to send,
              or a bigger project in mind?
            </p>

            <p className="mt-6 md:mt-8">
              i'd love to hear about it — reach out for anything and
              everything.
            </p>

            <p className="mt-6 text-right text-[14px] font-semibold lowercase text-neutral-800 md:mt-8 md:text-[18px]">
              xx dasha
            </p>

          </div>

        </div>

      </div>

      {/* Bottom spacing */}
      <div className="h-[140px] md:h-[100px]" />

    </section>
  );
}