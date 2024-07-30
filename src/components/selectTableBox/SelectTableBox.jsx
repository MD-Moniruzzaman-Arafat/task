export default function SelectTableBox() {
  return (
    <>
      <select className=" w-full h-[45px] select rounded-none select-bordered select-sm bg-white text-black">
        <option disabled selected>
          Select one
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
      </select>
    </>
  );
}
