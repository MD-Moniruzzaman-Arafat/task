import { RxCross2 } from "react-icons/rx";
import SelectTableBox from "../selectTableBox/SelectTableBox";

export default function Table() {
  return (
    <>
      <table className="text-black border-collapse">
        <thead className="text-black">
          <tr>
            <th className="border border-black py-3">Item</th>
            <th className="border border-black">Description</th>
            <th className="border border-black">Qty</th>
            <th className="border border-black">Unit Price</th>
            <th className="border border-black">Disc %</th>
            <th className="border border-black">Account</th>
            <th className="border border-black">Tex Rate</th>
            <th className="border border-black border-r-0">Amount RUPEE</th>
            <th className="border border-black border-x-0"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full text-center h-[45px] bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <SelectTableBox />
            </td>
            <td className="border border-black p-0 m-0">
              <SelectTableBox />
            </td>
            <td className="border border-black border-r-0 p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black border-x-0 bg-white">
              <RxCross2 />
            </td>
          </tr>

          <tr>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full text-center h-[45px] bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <SelectTableBox />
            </td>
            <td className="border border-black p-0 m-0">
              <SelectTableBox />
            </td>
            <td className="border border-black border-r-0 p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black border-x-0 bg-white">
              <RxCross2 />
            </td>
          </tr>

          <tr>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full text-center h-[45px] bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black p-0 m-0">
              <SelectTableBox />
            </td>
            <td className="border border-black p-0 m-0">
              <SelectTableBox />
            </td>
            <td className="border border-black border-r-0 p-0 m-0">
              <input
                type="text"
                className="w-full h-[45px] text-center bg-white text-black  focus:outline-none focus:rounded-none"
              />
            </td>
            <td className="border border-black border-x-0 bg-white">
              <RxCross2 />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
