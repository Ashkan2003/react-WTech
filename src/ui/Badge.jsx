/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Badge({ children, type }) {
  const base = "rounded-md px-3 py-[2px] text-sm font-semibold";
  const styles = {
    primary:
      base + " text-blue-700 bg-blue-100 dark:bg-blue-900 dark:text-blue-400 ",
    secondary:
      base +
      " text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-400",
    tertiary:
      base +
      " text-yellow-700 bg-yellow-200 dark:bg-yellow-950 dark:text-yellow-400",
    quaternary:
      base +
      " text-white  bg-black dark:bg-stone-700 dark:text-white",
  };

  return (
    <>
      <span className={styles[type]}>{children}</span>
    </>
  );
}

export default Badge;
