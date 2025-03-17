"use client";
import { deleteAction } from "@/actions/delete-action";
import style from "@/components/delete-bt.module.css";
import { GoodDataType } from "@/types/types";
import { useActionState, useEffect, useRef } from "react";

export default function DeleteBt({ id }: GoodDataType) {
  const [state, formAction, ispending] = useActionState(deleteAction, null);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state && state.status !== true) {
      alert(state.message);
    }
  }, [state]);
  return (
    <>
      <form action={formAction} className={style.container} ref={formRef}>
        <input type="hidden" name="good_id" value={id} readOnly hidden />
        {ispending ? (
          <div className={style.delete_btn}>삭제중임...</div>
        ) : (
          <div
            className={style.delete_btn}
            onClick={() => formRef.current?.requestSubmit()}
          >
            제삭하기!
          </div>
        )}
      </form>
    </>
  );
}
