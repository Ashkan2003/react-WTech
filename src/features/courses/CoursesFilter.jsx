import Filter from "../../ui/Filter";

function CoursesFilter() {
  return (
    <Filter
      filterField="stack"
      options={[
        { value: "all", label: "All" },
        { value: "frontend", label: "Frontend" },
        { value: "backend", label: "Backend" },
        { value: "desine", label: "Desine" },
        { value: "marketing", label: "Marketing" },
      ]}
    />
  );
}

export default CoursesFilter;
