import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="space-y-10 bg-gray-100 from-indigo-950 to-gray-900 py-28 text-center dark:bg-gradient-to-tr dark:text-white">
      <h1 className="text-xl">
        The page you are looking for could not be found 😢
      </h1>

      <Button type="secondary" onClick={moveBack}>
        &larr; Go back
      </Button>
    </div>
  );
}

export default PageNotFound;
