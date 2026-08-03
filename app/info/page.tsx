import { Suspense } from "react";
import InfoPage from "./InfoPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <InfoPage />
    </Suspense>
  );
}