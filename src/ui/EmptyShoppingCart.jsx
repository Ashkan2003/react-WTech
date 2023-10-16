import { useMoveBack } from "../hooks/useMoveBack";
import Button from "./Button";

function EmptyShoppingCart() {
  const moveBack = useMoveBack();

  return (
    <div className="p-32 text-center space-y-6  bg-gray-100 from-indigo-950 to-gray-900 py-28  dark:bg-gradient-to-tr dark:text-white">
      <p className="text-3xl dark:text-gray-300">
        your shopping cart is empty. please go back and buy your favorite
        course😁
      </p>

      <Button type="secondary" onClick={moveBack}>
        &larr; Go back
      </Button>
    </div>
  );
}

export default EmptyShoppingCart;
