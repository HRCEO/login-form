"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatBubbleOvalLeftEllipsisIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatBubbleOvalLeftEllipsisIcon,
  VideoCameraIcon as SolidVideoCameraIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface menuBars {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const TabBar = () => {
  const pathname = usePathname();

  const menuBars: menuBars[] = [
    {
      href: "/products",
      text: "홈",
      icon:
        pathname === "/products" ? (
          <SolidHomeIcon className="size-7" />
        ) : (
          <OutlineHomeIcon className="size-7" />
        ),
    },
    {
      href: "/life",
      text: "동네생활",
      icon:
        pathname === "/life" ? (
          <SolidNewspaperIcon className="size-7" />
        ) : (
          <OutlineNewspaperIcon className="size-7" />
        ),
    },
    {
      href: "/chat",
      text: "채팅",
      icon:
        pathname === "/chat" ? (
          <SolidChatBubbleOvalLeftEllipsisIcon className="size-7" />
        ) : (
          <OutlineChatBubbleOvalLeftEllipsisIcon className="size-7" />
        ),
    },
    {
      href: "/live",
      text: "쇼핑",
      icon:
        pathname === "/live" ? (
          <SolidVideoCameraIcon className="size-7" />
        ) : (
          <OutlineVideoCameraIcon className="size-7" />
        ),
    },
    {
      href: "/profile",
      text: "나의 당근",
      icon:
        pathname === "/profile" ? (
          <SolidUserIcon className="size-7" />
        ) : (
          <OutlineUserIcon className="size-7" />
        ),
    },
  ];

  return (
    <div className="fixed bg-neutral-600 bottom-0 w-full mx-auto max-w-screen-sm grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white">
      {menuBars.map((menu, idx) => (
        <TabBarMenuButton
          key={idx}
          href={menu.href}
          text={menu.text}
          icon={menu.icon}
        />
      ))}
    </div>
  );
};

export default TabBar;

interface TabBarMenuButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const TabBarMenuButton = ({ href, text, icon }: TabBarMenuButtonProps) => {
  return (
    <Link href={href} className="flex flex-col items-center gap-px">
      {icon}
      <span>{text}</span>
    </Link>
  );
};
