import { formatTimeAgo, formatToWon } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ListProductProps {
  photo: string;
  price: number;
  title: string;
  created_at: Date;
  id: number;
}

const ListProduct = ({
  photo,
  price,
  title,
  created_at,
  id,
}: ListProductProps) => {
  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="relative size-28 rounded-md overflow-hidden">
        <Image src={photo} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {formatTimeAgo(created_at)}
        </span>
        <span className="text-lg text-semibold">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
};

export default ListProduct;
