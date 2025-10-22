import { Skeleton } from "@mui/material";


export default function CategoryLoading() {
  return (
    <div className=" w-full px-[25px] mt-[14px] flex gap-4 items-center overflow-clip py-[10px] mb-[6px] shrink-0 overflow-y-clip">
        <Skeleton variant="text" sx={{ fontSize: '1rem' , width: '130px' , height: '40px' , flexShrink : '0' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' , width: '130px' , height: '40px' , flexShrink : '0' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' , width: '130px' , height: '40px' , flexShrink : '0' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' , width: '130px' , height: '40px' , flexShrink : '0' }} />
    </div>
  );
}