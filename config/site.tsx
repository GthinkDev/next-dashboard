import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "首页看板",
      icon: HomeIcon,
      url: "/home",
    },
    {
      title: "账户管理",
      icon: HomeIcon,
      url: "/",
      items: [
        {
          title: "用户管理",
          url: "/",
        },
        {
          title: "操作日志",
          url: "/",
        },
      ],
    },
    {
      title: "数据监控",
      icon: HomeIcon,
      url: "/",
      // isActive: true,
      items: [
        {
          title: "用户监控",
          url: "/",
        },
        {
          title: "调度中心",
          url: "/",
        },
      ],
    },
    {
      title: "财务管理",
      icon: HomeIcon,
      url: "/",
    },
    {
      title: "套餐管理",
      icon: DocumentDuplicateIcon,
      url: "/",
      items: [
        {
          title: "套餐设置",
          url: "/",
        },
        {
          title: "操作日志",
          url: "/",
        },
      ],
    },
    {
      title: "资源管理",
      icon: HomeIcon,
      url: "/",
      items: [
        {
          title: "TTS 设置",
          url: "/",
        },
        {
          title: "LLM 设置",
          url: "/",
        },
        {
          title: "数字人管理",
          url: "/",
        },
        {
          title: " 其它",
          url: "/",
        },
      ],
    },
    {
      title: "权限管理",
      icon: UserGroupIcon,
      url: "/",
      items: [
        {
          title: "角色管理",
          url: "/",
        },
        {
          title: "员工管理",
          url: "/",
        },
        {
          title: "代理商管理",
          url: "/",
        },
        {
          title: " 操作日志",
          url: "/",
        },
      ],
    },
    {
      title: "日志查看",
      icon: HomeIcon,
      url: "/",
      items: [
        {
          title: "用户日志",
          url: "/",
        },
        {
          title: "系统日志",
          url: "/",
        },
      ],
    },
  ],
};
