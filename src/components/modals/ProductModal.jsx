import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { LuPlus } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";

export default function ProductModal({ open, data, onClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    bgcolor: "white",
    border: "0px",
    outline: "0px",
    borderRadius: "12px",
    boxShadow: 24,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="w-full h-full flex flex-col items-center p-4">
              <div className="w-[70%] p-6 rounded-2xl">
                <img src={data?.image} alt="" />
              </div>
              <div className="w-full text-xl font-bold pr-2">
                {data?.title.substring(0, 19)}
              </div>
              <div className="w-full text-sm px-2 text-gray-600">
                {data?.description.substring(0, 78)}
              </div>
              <div className="w-full pl-2 pr-4 mt-2 flex justify-between items-center">
                <p className="font-bold text-gray-500">{data?.category}</p>
                <div className="flex gap-1 items-bottom text-md font-bold">
                  <TiStarFullOutline color="#FBBE21" size={21} />
                  {data?.rating.rate} <span className="font-medium text-gray-500">({data?.rating.count})</span>
                </div>
              </div>
              <div className="mt-2 flex w-full justify-between align-center border-t-2 border-gray-300 pt-3 px-2">
                <p className="text-[18px] font-semibold">${data?.price}</p>
                <div className="text-white font-semibold bg-[#C67C4E] flex justify-center items-center px-4 h-[34px] shrink-0 rounded-xl">
                    Buy Now
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
