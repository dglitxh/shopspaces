import React from "react";
import Catalog from "./catalog";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        Space
        <Catalog />
      </main>
    </div>
  );
}
