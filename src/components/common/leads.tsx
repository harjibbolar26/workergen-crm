"use client";

import { LeadCard } from "@/components/common/leads-card";
import { LeadsTable } from "@/components/common/lead-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leads } from "@/config/constants";
import SalesProgress from "./sales-progress";
import Image from "next/image";
import KeyActivities from "./activities";
import LeadCardsCarousel from "./leads-carousel";
import LeadDetails from "./leads-details";
import { useState } from "react";

export default function DashboardPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenLeadsDetails = () => {
    setIsDialogOpen(true);
  };
  return (
    <div className="p-6 bg-[#eee] w-full shadow-none">
      <Card className="mb-6 border-2 border-blue-500">
        <CardHeader>
          <div className="flex flex-col items-start justify-between">
            <div className="">
              <CardTitle className="flex items-center gap-2">
                <Image
                  src={"/copilot.png"}
                  alt="copilot"
                  width={20}
                  height={20}
                />
                <p className="text-sm text-muted-foreground font-bold text-black">
                  Hi Mona, <span className="text-blue-700">68%</span> of goal
                  achieved Rest can be achieved by focusing on 20 top leads
                </p>
              </CardTitle>
            </div>
            <div className="text-right">
              <SalesProgress />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex max-md:flex-col md:gap-8 gap-4 w-full">
            <div className="md:w-3/5">
              <p className="text-xs text-muted-foreground font-bold mb-2">
                Copilot has pinpointed 20 keyleads that show strong purchase
                intent and actively engagging. These leads need your focus.
              </p>
              <LeadCardsCarousel openDetails={handleOpenLeadsDetails} />
            </div>
            <div className="md:w-2/5 mt-6 md:mt-0">
              <KeyActivities />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <LeadsTable leads={Leads} />
        </CardContent>
      </Card>
    </div>
  );
}
