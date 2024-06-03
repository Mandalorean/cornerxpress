import Image from "next/image";
import Right from "@/components/icons/right.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold leading">
          Grill, deli, pizza, ATM, lottery: your one-stop convenience shop.
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Corner Express Mart offers a diverse selection, including delicious
          grill and deli options, freshly made pizzas, and convenient services
          like an ATM and lottery tickets. Whether you're craving a quick meal
          or need cash on the go, we have you covered.
        </p>
        <div className="flex gap-5 text-sm">
          <button className="bg-primary items-center flex gap-2 rounded-full uppercase font-semibold text-white px-4 py-2">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 ">
            Learn More <Right />{" "}
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/logo.svg"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"cornerxpress"}
        />
      </div>
    </section>
  );
}
