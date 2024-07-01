import ListProduct from "@/components/ListProduct";
import ProductList from "@/components/product-list";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";
import React from "react";

async function getInitialProducts() {
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
    take: 1,
  });

  return products;
}

export type initialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

const ProductsPage = async () => {
  const initialProducts = await getInitialProducts();

  return <ProductList initialProducts={initialProducts} />;
};

export default ProductsPage;
