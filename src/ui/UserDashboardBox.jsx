/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CountUp from "react-countup";

function UserDashboardBox({
  lableTitle,
  lableCount,
  lableCountPrefix,
  lableCountSuffix,
  lableCountDecimals,
  lableColor,
  lableIcon,
  lableIconColor,
  lableIconBgColor,
  lableIconSize,
  lableDarkColor,
}) {
  return (
    <div className={`rounded-lg shadow-sm ${lableColor} ${lableDarkColor}`}>
      <div className="flex items-center justify-start space-x-4 px-4 py-4">
        <div
          className={`${lableIconSize} ${lableIconColor} ${lableIconBgColor} rounded-full p-3`}
        >
          {lableIcon}
        </div>
        <div className="min-w-[30px] flex-col">
          <p className="text-md font-semibold ">{lableTitle}</p>
          <p className="text-xl font-bold dark:text-gray-300">
            {lableCountPrefix}
            {
              <CountUp
                duration={6}
                end={lableCount}
                decimals={lableCountDecimals}
              />
            }
            {lableCountSuffix}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardBox;
