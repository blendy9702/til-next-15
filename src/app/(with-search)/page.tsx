import style from "@/app/(with-search)/page.module.css";
import { AllGoods } from "@/components/all-goods";
import { RandomGoods } from "@/components/random-goods";
import GoodItemSkeleton from "@/components/skeleton/good-item-skeleton";
import GoodItemSkeletonList from "@/components/skeleton/good-item-skeleton-list";
import { Suspense } from "react";

// 강제로 Dynamic 으로 변경하는 방안
// next 에서는 apge를 강제로 변경하는 방법을 제공
// export const dynamic = "auto"
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 상품</h3>
        <Suspense
          fallback={
            <div>
              <GoodItemSkeletonList count={3} />
            </div>
          }
        >
          <RandomGoods />
        </Suspense>
      </section>
      <section>
        <h3>전체 상품</h3>
        <Suspense
          fallback={
            <div>
              <GoodItemSkeletonList count={5} />
            </div>
          }
        >
          <AllGoods />
        </Suspense>
      </section>
    </div>
  );
}
