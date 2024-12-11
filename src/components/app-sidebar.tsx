"use client";

import * as React from "react";
import {
  BlocksIcon,
  CalendarClockIcon,
  Command,
  DollarSignIcon,
  HomeIcon,
  Send,
  Settings2,
  ShoppingBagIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Saharat Vitchataya",
    email: "vitchataya.saharat@gmail.com",
    avatar:
      "https://cdn.readawrite.com/articles/9924/9923770/thumbnail/large.gif?1",
  },
  projects: [
    {
      name: "Home",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      name: "Transactions",
      url: "/dashboard/transactions",
      icon: DollarSignIcon,
    },
    {
      name: "Application",
      url: "/dashboard/application",
      icon: BlocksIcon,
    },
    {
      name: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],
  navMain: [
    {
      title: "Tree store",
      url: "#",
      icon: ShoppingBagIcon,
      isActive: true,
      items: [
        {
          title: "Page",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Aiselena Hotel CNX",
      url: "#",
      icon: CalendarClockIcon,
      items: [
        {
          title: "Page",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Dress store",
      url: "#",
      icon: ShoppingBagIcon,
      items: [
        {
          title: "Page",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "/contact",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Standardise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
