"use client";
import styles from "./InfoTabs.module.scss";

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
    <nav className={styles.tabs}>

      <button
        onClick={() => changeTab("prices")}
        className={`${styles.tab} ${
          activeTab === "prices"
            ? styles.activeTab
            : ""
        }`}
      >
        prices
      </button>

      <button
        onClick={() => changeTab("metrics")}
        className={`${styles.tab} ${
          activeTab === "metrics"
            ? styles.activeTab
            : ""
        }`}
      >
        metrics
      </button>

      <button
        onClick={() => changeTab("contacts")}
        className={`${styles.tab} ${
          activeTab === "contacts"
            ? styles.activeTab
            : ""
        }`}
      >
        contacts
      </button>

    </nav>
  );
}
