"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import PricesTab from "../components/PricesTab";
import MetricsTab from "../components/MetricsTab";
import ContactsTab from "../components/ContactTab";
import InfoTabs from "../components/InfoTabs";

import { pricingCards } from "../data/pricingCards";
import { metrics } from "../data/metricsData";

type Tab = "prices" | "metrics" | "contacts";
type PriceOption = 0 | 1 | 2;

export default function InfoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  


  const tab = searchParams.get("tab");
  console.log("tab =", tab);


  const activeTab: Tab =
    tab === "metrics"
      ? "metrics"
      : tab === "contacts"
      ? "contacts"
      : "prices";

  const [selectedOptions, setSelectedOptions] = useState<PriceOption[]>([
    0, 0, 0,
  ]);

  const [hoveredOption, setHoveredOption] = useState<{
    cardIndex: number;
    optionIndex: number;
  } | null>(null);

  const changeTab = (tab: Tab) => {
    router.replace(`/info?tab=${tab}`, {
      scroll: false,
    });
  };

  const selectOption = (
    cardIndex: number,
    optionIndex: PriceOption
  ) => {
    setSelectedOptions((current) =>
      current.map((option, index) =>
        index === cardIndex ? optionIndex : option
      )
    );
  };

  return (
    <main className="py-4 md:py-8">
      <div className="py-4 md:py-6">
        <button
          onClick={() => router.push("/")}
          className="group flex w-fit items-center gap-2 text-xs lowercase text-neutral-500 transition-colors duration-300 hover:text-black"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          <span>back to projects</span>
        </button>
      </div>

      <section className="flex flex-col gap-10 md:gap-16">
        <InfoTabs
          activeTab={activeTab}
          changeTab={changeTab}
        />

        {activeTab === "prices" && (
          <PricesTab
            pricingCards={pricingCards}
            selectedOptions={selectedOptions}
            hoveredOption={hoveredOption}
            setHoveredOption={setHoveredOption}
            selectOption={selectOption}
          />
        )}

        {activeTab === "metrics" && (
          <MetricsTab
            followers={metrics.followers}
            engagementRate={metrics.engagementRate}
            audience={metrics.audience}
            postReach={metrics.postReach}
            bestPosts={metrics.bestPosts}
          />
        )}

        {activeTab === "contacts" && <ContactsTab />}
      </section>
    </main>
  );
}