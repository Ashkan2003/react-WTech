/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function CourseDetailsBox({
  lableTitle,
  lableDes,
  lableColor,
  lableIcon,
  lableIconColor,
  lableIconSize,
  lableDarkColor,

}) {
  return (
    <div className={`rounded-lg shadow-sm ${lableColor} ${lableDarkColor}`}>
      <div className="flex items-center justify-center space-x-3 py-4 px-4">
        <div className={`${lableIconSize} ${lableIconColor}`}>
          {lableIcon}
        </div>
        <div className="min-w-[30px] flex-col">
          <p className="text-lg font-semibold ">{lableTitle}</p>
          <p className="text-xl font-bold dark:text-gray-300">{lableDes}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsBox;
