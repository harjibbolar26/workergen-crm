import { AppSidebar } from "@/components/common/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
    </SidebarProvider>
  );
}
