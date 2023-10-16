/* eslint-disable no-unused-vars */

import CountUp from "react-countup";
import { HiOutlineTv } from "react-icons/hi2";

/* eslint-disable react/prop-types */
function Lable({
  lableTitle,
  lableCount,
  lableCountSuffix,
  lableColor,
  lableIcon,
  lableIconColor,
  lableIconSize,
  lableDarkColor,
}) {
  return (
    <div className={`rounded-lg ${lableColor} ${lableDarkColor}`}>
      <div className="flex items-center justify-center space-x-3 py-4">
        <div className={`${lableIconSize} ${lableIconColor}`}>{lableIcon}</div>
        <div className="min-w-[30px] flex-col">
          <p className="text-2xl font-bold ">
            {
              <CountUp
                enableScrollSpy="true"
                scrollSpyOnce="true"
                scrollSpyDelay={1000}
                end={lableCount}
                duration={10}
              />
            }
            {lableCountSuffix}
          </p>
          <p className="text-lg font-semibold ">{lableTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Lable;
