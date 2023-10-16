/* eslint-disable no-unused-vars */
import { Default, Orbitals, Roller } from "react-spinners-css"

function SpinnerFullPage() {
    return (
        <div className="text-center mt-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <Roller />
        </div>
    )
}

export default SpinnerFullPage
