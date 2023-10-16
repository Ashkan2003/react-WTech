import { HiTrash } from "react-icons/hi2";
import { formatCurrency } from "../utils/helpers";

/* eslint-disable react/prop-types */
function ShoppingCartItem({courseName,teacherName,coursePrice, selfDeleteCourse,courseId}) {
  return (
    <tr className="border-b text-xl bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
        {courseName}
      </td>
      <td className="px-6 py-4">{teacherName}</td>
      <td className="px-6 py-4">{formatCurrency(coursePrice)}</td>
      <td className="px-6 py-4">{<HiTrash onClick={()=> selfDeleteCourse(courseId)} className="ms-3 hover:text-red-700 cursor-pointer"/>}</td>
    </tr>
  );
}

export default ShoppingCartItem;
