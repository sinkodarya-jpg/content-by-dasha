"use client";

type Tab = "prices" | "metrics" | "contacts";

type Props = {
  activeTab: Tab;
  changeTab: (tab: Tab) => void;
};

export default function InfoTabs({
  activeTab,
  changeTab,
}: Props) {
  return (
    <nav className="relative left-1/2 grid w-screen -translate-x-1/2 grid-cols-3 border-y border-black md:mt-1">

      <button
        onClick={() => changeTab("prices")}
        className={`py-1 text-[10px] transition-colors duration-300 md:py-1.5 md:text-sm ${
          activeTab === "prices"
            ? "bg-black text-white"
            : "bg-white text-[#2F2F2F] hover:bg-neutral-100"
        }`}
      >
        prices
      </button>

      <button
        onClick={() => changeTab("metrics")}
        className={`border-l border-black py-1 text-[10px] transition-colors duration-300 md:py-1.5 md:text-sm ${
          activeTab === "metrics"
            ? "bg-black text-white"
            : "bg-white text-[#2F2F2F] hover:bg-neutral-100"
        }`}
      >
        metrics
      </button>

      <button
        onClick={() => changeTab("contacts")}
        className={`border-l border-black py-1 text-[10px] transition-colors duration-300 md:py-1.5 md:text-sm ${
          activeTab === "contacts"
            ? "bg-black text-white"
            : "bg-white text-[#2F2F2F] hover:bg-neutral-100"
        }`}
      >
        contacts
      </button>

    </nav>
  );
}