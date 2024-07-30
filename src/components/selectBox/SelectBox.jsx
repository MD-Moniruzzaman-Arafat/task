export default function SelectBox() {
  return (
    <>
      <select className="select select-bordered select-sm bg-slate-200 text-black">
        <option disabled selected>
          select one
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </>
  );
}
