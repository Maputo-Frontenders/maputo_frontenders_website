import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function LoadingCards() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Skeleton className="w-[300px] h-[450px]" />
    </div>
  );
}
