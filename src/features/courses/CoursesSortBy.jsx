import SortBy from "../../ui/SortBy";

function CoursesSortBy() {
    return (
        <SortBy // the value first part(like price or courseHour) it must be the same name as the colum-name in subabase
          filterField="sort"
          options={[
            { value: "id-high", label: "All" }, // sort the courses by defult id 
            { value: "price-low", label: "low price" },// sort the courses by the price culom 
            { value: "price-high", label: "high price" },
            { value: "courseHour-low", label: "low time" },// sort the courses by the courseHour 
            { value: "courseHour-high", label: "high time" },
          ]}
        />
      );
}

export default CoursesSortBy
