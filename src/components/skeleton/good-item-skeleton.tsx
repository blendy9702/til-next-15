import style from "@/components/skeleton/good-item-skeleton.module.css";

export default function GoodItemSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.image}></div>
      <div className={style.content}>
        <div className={style.title}></div>
        <div className={style.category}></div>
        <br />
        <div className={style.rating}></div>
      </div>
    </div>
  );
}
