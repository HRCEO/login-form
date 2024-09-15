"use server";
import db from "@/lib/db";

export async function getMoreProducts(page: number) {
  const products = await db.product.findMany({
    select: {
      photo: true,
      price: true,
      title: true,
      created_at: true,
      id: true,
    },
    orderBy: {
      created_at: "desc",
    },
    skip: page * 1,
    take: 10,
  });

  return products;
}
