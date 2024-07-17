import Image from "next/legacy/image";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="text-center">
        <h3 className="uppercase text-gray-600 font-semibold leading-4">
          Check Out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 ">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
