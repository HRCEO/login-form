import ListProduct from "@/components/ListProduct";
import ProductList from "@/components/product-list";
import db from "@/lib/db";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Prisma } from "@prisma/client";
import Link from "next/link";
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

  return (
    <div>
      <ProductList initialProducts={initialProducts} />
      <Link
        href="/products/add"
        className="fixed right-1/3 transition-colors hover:bg-orange-400 bg-orange-500 flex items-center bottom-24 rounded-full size-16  text-white justify-center"
      >
        <PlusIcon className="size-10" />
      </Link>
    </div>
  );
};

export default ProductsPage;
