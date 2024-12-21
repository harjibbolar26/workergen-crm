"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { NavItem, navItems } from "@/config/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import AgentSkillDialog from "./agent-skill";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isAgentSkillDialogOpen, setAgentSkillDialogOpen] =
    React.useState(false);
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  const handleAgentSkillClick = () => {
    setAgentSkillDialogOpen(true);
    setSidebarOpen(false);
  };

  return (
    <Sidebar
      {...props}
      className={`mt-10 ${isSidebarOpen ? "block" : "hidden"} custom-scrollbar`}
    >
      <SidebarContent className="custom-scrollbar">
        {navItems.map((item) => (
          <SidebarGroup key={item.title}>
            {item.items?.length ? (
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center justify-between">
                    {item.title}
                    <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.items?.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton asChild>
                            <a href="#">
                              {subItem.icon && (
                                <subItem.icon className="size-4" />
                              )}
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a
                          href="#"
                          onClick={
                            item.title === "Agent skill"
                              ? handleAgentSkillClick
                              : undefined
                          }
                        >
                          {item.icon && <item.icon className="size-4" />}
                          <span>{item.title}</span>
                          {item.items && (
                            <ChevronDown className="ml-auto size-4" />
                          )}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <AgentSkillDialog
        isOpen={isAgentSkillDialogOpen}
        setIsOpen={setAgentSkillDialogOpen}
        onClose={() => setAgentSkillDialogOpen(false)}
      />
    </Sidebar>
  );
}
