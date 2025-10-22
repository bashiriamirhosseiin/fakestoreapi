import { Skeleton } from "@mui/material";

export default function ProductLoading() {
  return (
    <div className="w-full px-[25px] flex gap-[15px] flex-wrap justify-evenly overflow-y-clip">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="flex flex-col" key={index}>
          <Skeleton variant="rounded" width={140} height={120} />
          <div className="w-full h-2"></div>
          <Skeleton variant="rounded" width={140} height={20} />
          <div className="w-full h-2"></div>
          <Skeleton variant="rounded" width={140} height={20} />
        </div>
      ))}
    </div>
  );
}