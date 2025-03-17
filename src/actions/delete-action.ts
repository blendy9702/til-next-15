/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function deleteAction(_: any, FormData: FormData) {
  const goodId = FormData.get("good_id") as string;
  if (!goodId) {
    return { status: false, message: `${goodId} 없잖아 ㅋㅋ` };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${goodId}`,
      { method: "DELETE" }
    );
    const { id } = await res.json();

    revalidatePath(`/good/${goodId}`);
    revalidateTag(`good_${id}`);
    return {
      status: true,
      message: `${goodId} 삭제 성공했구만?`,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: `${goodId} 삭제 실패함 ㅋㅋ`,
    };
  }
}
