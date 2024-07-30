import { FaArrowLeft, FaArrowRight, FaExpand, FaRegUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-slate-200 p-5 text-xl text-slate-900 items-center">
        <div className="flex gap-3 items-center">
          <div className="flex gap-3">
            <FaArrowLeft />
            <FaArrowRight />
          </div>
          <div>
            <div className="breadcrumbs p-0">
              <ul>
                <li>admin</li>
                <li>invoice-maker</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <FaExpand />
          <FaRegUser />
        </div>
      </div>
    </>
  );
}
