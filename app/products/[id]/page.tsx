import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToWon } from "@/lib/utils";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import React from "react";

async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });

  return product;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }

  const product = await getProduct(id);

  if (!product) {
    return notFound();
  }

  const isOwner = await getIsOwner(product.userId);

  return (
    <div>
      <div className="relative aspect-square">
        <Image fill src={product.photo} alt={product.title} />
      </div>
      <div className="p-5 flex items-center gap-3 border-b border-neutral-600">
        <div className="size-10 rounded-full overflow-hidden">
          {product.user.avatar !== null ? (
            <Image
              src={product.user.avatar}
              width={50}
              height={50}
              alt={product.user.username}
              className="object-cover"
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <h3>{product.user.username}</h3>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div className="fixed w-full bottom-0 left-0 p-5 pb-10 bg-neutral-800 flex justify-between items-center">
        <span className="font-semibold text-lg">
          {formatToWon(product.price)}
        </span>
        {isOwner && (
          <button className="bg-orange-500 text-white font-semibold rounded-md px-5 py-2.5">
            Delete product
          </button>
        )}
        <Link
          className="bg-orange-500 text-white font-semibold rounded-md px-5 py-2.5"
          href={""}
        >
          채팅하기
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
