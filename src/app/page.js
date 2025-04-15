// app/page.js (this is still server component)
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HomePage = dynamic(() => import("../components/HomePage"), {
  // ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
