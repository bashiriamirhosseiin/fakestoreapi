import { Skeleton } from "@mui/material";

export default function CartLoading() {
  return (
    <div className="">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="w-full flex flex-col" key={index}>
          <div className="pl-2 w-full">
            <Skeleton variant="text" width="100%" height={60} />
          </div>
        </div>
      ))}
    </div>
  );
}
