import { LeadCard } from "@/components/common/leads-card";
import { LeadsTable } from "@/components/common/lead-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leads } from "@/config/constants";
import SalesProgress from "./sales-progress";
import Image from "next/image";

export default function DashboardPage() {
  //   const leads = [
  //     {
  //       id: "1",
  //       name: "Jane Reyes",
  //       topic: "Improving cost per cup",
  //       status: "New",
  //       createdOn: "3/10/2024 9:30 AM",
  //     },
  //     {
  //       id: "2",
  //       name: "Lilly Pyles",
  //       topic: "Cafe A100 bulk rate",
  //       status: "New",
  //       createdOn: "3/13/2024 2:45 PM",
  //     },
  //     // Add more leads as needed
  //   ]

  return (
    <div className="p-6 bg-white w-full">
      <Card className="mb-6">
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
              {/* <p className="text-sm font-medium">Target: $45 million</p>
              <Progress value={68} className="mt-2 w-[200px]" /> */}
              <SalesProgress />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="">
            <p className="text-sm text-muted-foreground font-boldblack">
              Copilot has pinpointed 20 keyleads that show strong purchase
              intent and actively engagging. These leads need your focus.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <LeadCard
              name="Jane Reyes"
              role="COO"
              company="Northwind Traders"
              description="Jane may be interested in upgrading espresso machines for her in-store coffee shops."
              tags={["Expand business", "High buying intent"]}
            />
            <LeadCard
              name="Allan Munger"
              role="Head of Real Estate Development"
              company="Contoso Coffee"
              description="Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract."
              tags={["Upcoming meeting", "Due today"]}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
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
