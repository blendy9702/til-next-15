import { GoodDataType } from "@/types/types";
import GoodItem from "./good-item";

export async function AllGoods() {
  let allGoods: GoodDataType[] = [];
  try {
    const res = await fetch(`${process.env.API_URL}/products?limit=10`);
    allGoods = await res.json();
    console.log("전체 : ", allGoods);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      {allGoods.map((good) => (
        <GoodItem key={good.id} {...good} />
      ))}
    </div>
  );
}
