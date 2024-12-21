import { InnerNav } from "@/components/common/innernav";
import DashboardPage from "@/components/common/leads";
import { AppSidebar } from "@/components/common/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="flex w-full">
      <AppSidebar />
      <div className="w-full p-2">
        <SidebarTrigger />
        <InnerNav/>
        <DashboardPage/>
      </div>
    </div>
  );
}
