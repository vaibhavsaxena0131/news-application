import { memo } from "react";

const NoDataFoundMessage = ({ message }) => {
  return (
    <div className="w-full p-4 min-h-60 flex items-center justify-center bg-[#FFFFFF] rounded-2xl border-slate-200 border shadow-[0_0_35px_0_#AEAEAE1A]">
      <p className="font-figtree font-semibold text-sm text-[#17181C]">
        {/* {message} */}
      </p>
    </div>
  );
};

export default memo(NoDataFoundMessage);
