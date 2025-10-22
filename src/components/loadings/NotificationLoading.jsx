import { Skeleton } from "@mui/material";

export default function NotificationLoading() {
  return (
    <div className="w-full flex flex-col items-center px-[6.4%] border-2 border-gray-300 rounded-2xl p-3">
      <Skeleton variant="text" width="100%" height={40} />
      <div className="pl-2 w-full">
        <Skeleton variant="text" width="100%"  height={60}/>
      </div>

    </div>
  );
}
