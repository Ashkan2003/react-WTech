import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../../ui/Button";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function LogOut() {
  const { logout, isLoading } = useLogout();
  return (
    <Button type="secondary" disabled={isLoading} onClick={logout}>
      <div className="flex items-center justify-between space-x-2">
        <p>Logout</p>
        {!isLoading ? <HiArrowRightOnRectangle className="text-xl" /> : <SpinnerMini />}
      </div>
    </Button>
  );
}

export default LogOut;
