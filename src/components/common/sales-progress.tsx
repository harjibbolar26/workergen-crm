"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

interface SaleStage {
  name: string;
  amount: number;
  color: string;
}

export default function SalesProgress() {
  const target = 111_000_000; // $45 millionl

  const stages: SaleStage[] = [
    { name: "Won", amount: 18_000_000, color: "bg-emerald-500" },
    { name: "Committed", amount: 8_000_000, color: "bg-blue-500" },
    { name: "Best case", amount: 7_000_000, color: "bg-purple-400" },
    { name: "Qualified", amount: 3_000_000, color: "bg-amber-400" },
    { name: "Leads", amount: 75_000_000, color: "bg-gray-300" },
  ];

  const totalAmount = stages.reduce((sum, stage) => sum + stage.amount, 0);
  const percentageAchieved = Math.round((totalAmount / target) * 100);

  return (
    <Card className="w-full shadow-none border-none relative">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb--4">
        <CardTitle className="text-xs font-medium flex items-center justify-between w-full mb--4">
          1 month until Q4 ends
          <div className="flex items-center justify-between w-1/2 text-xs">
            <div className="flex items-center relative">
              <Separator
                orientation="vertical"
                className="h-6 w-[1.5px] bg-black absolute bottom-[-8px]"
              />
              <span>Target</span>
              <span className="font-bold">
                $45 million
              </span>
            </div>
            <span className="text-muted-foreground">
              60% of target achieved
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-2 w-full overflow-hidden rounded-full mt-0">
          {stages.map((stage, index) => {
            const width = (stage.amount / target) * 100;
            return (
              <div
                key={stage.name}
                className={`${stage.color} transition-all`}
                style={{ width: `${width}%` }}
              />
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          {stages.map((stage) => (
            <div key={stage.name} className="flex items-center space-x-2">
              <div className={`h-2 w-2 rounded-full ${stage.color}`} />
              <span className="text-xs">
                {stage.name} ${(stage.amount / 1_000_000).toFixed(1)}m
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
