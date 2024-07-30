import { GoEye } from "react-icons/go";
import { LuStickyNote } from "react-icons/lu";
import SelectBox from "../selectBox/SelectBox";
import Table from "../table/Table";

export default function Form() {
  return (
    <>
      <div className="bg-slate-300 p-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <label className="form-control">
              <div className="label">
                <span className="label-text font-bold text-black">To</span>
              </div>
              <SelectBox />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text font-bold text-black">Date</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered input-sm w-52 max-w-xs font-normal bg-slate-200  text-black"
              />
            </label>
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold text-black">
                  Due date
                </span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered input-sm w-52 max-w-xs font-normal bg-slate-200  text-black"
              />
            </label>
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold text-black">
                  Invoice #
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-52 max-w-xs font-normal bg-slate-200  text-black"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text font-bold text-black">
                  Reference
                </span>
              </div>
              <input
                type="text"
                placeholder="enter reference"
                className="input input-bordered input-sm w-52 max-w-xs font-normal bg-slate-200  text-black"
              />
            </label>
          </div>
          <div className="flex gap-3 text-lg font-bold items-center text-blue-500">
            <GoEye />
            <p>Preview</p>
            <LuStickyNote />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <SelectBox />

          <label className="flex gap-2">
            <div className="label">
              <span className="label-text font-bold text-black">
                Amounts are
              </span>
            </div>
            <SelectBox />
          </label>
        </div>

        <div className="mt-6">
          <div className="overflow-x-auto ">
            <Table />
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <div>
            <button className="btn btn-wide text-blue-700">
              Add a new line
            </button>
          </div>
          <div className="text-black ">
            <div className="border-b-4 w-96 border-black">
              <p className="text-right flex justify-between gap-5">
                subtotal <span className="text-right">100.00</span>
              </p>
              <p className="text-right flex justify-between gap-5">
                tex <span className="text-right">10.00</span>
              </p>
            </div>
            <h1 className="text-right flex justify-between gap-5 font-bold">
              Total <span>800.00</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-success text-white">Approve</button>
      </div>

      <div className="mt-6">
        <h1>History & Note</h1>
      </div>
    </>
  );
}
