import { Skeleton } from "@mui/material";

export default function SinglePageLoading() {
  return (
    <div className="w-full flex flex-col justify-start my-2 px-[6.4%]">
        <Skeleton variant="text" width="100%" height={300} />
        <div className="mt-4">
             <Skeleton variant="text" width="100%" height={60} />
             <Skeleton variant="text" width="100%" height={60} />
             <Skeleton variant="text" width="100%" height={60} />
        </div>
    </div>
  );
}
