"use client";

import { Building2, Calendar, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Activity {
  icon: string;
  image: string;
  title: string;
  organization: string;
  amount: number;
  daysToClose: number;
  task: string;
}

const activities: Activity[] = [
  {
    icon: "CA",
    image: "/cafe.png",
    title: "Cafe A100 for Woodland Bank",
    organization: "Woodland Bank",
    amount: 280000,
    daysToClose: 8,
    task: "Review draft and reply to Chris Naido",
  },
  {
    icon: "FK",
    image: "/fk.png",
    title: "Partnership opportunity for Fabrikam",
    organization: "Fabrikam",
    amount: 5000000,
    daysToClose: 12,
    task: "Prepare me for Fabrikam's key stakeholder meeting",
  },
];

export default function KeyActivities() {
  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 mb-4">
        Other key activities
      </h2>

      <div className="space-y-2 mt-4">
        {activities.map((activity, index) => (
          <Card key={index} className="border border-gray-100">
            <CardContent className="p-2">
              <div className="space-y-2">
                {/* Header with icon and main info */}
                <div className="flex items-start gap-1">
                  <Avatar className="h-9 w-9 bg-gray-100">
                    <AvatarImage src={activity.image} />
                    <AvatarFallback className="text-sm text-gray-600">
                      {activity.icon}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-black font-bold">{activity.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{activity.organization}</span>
                      <span>•</span>
                      <span>${activity.amount.toLocaleString()}</span>
                      <span>•</span>
                      <span>{activity.daysToClose} days to close</span>
                    </div>
                  </div>
                </div>

                {/* Task item */}
                <div className="flex items-start gap-2 flex-1 w-full">
                  <div className="flex items-center gap-2 text-sm text-gray-600  rounded-md bg-[#eef] p-2 flex-1">
                    <Calendar className="h-4 w-4" />
                    <span className="font-bold">{activity.task}</span>
                  </div>
                  <Image
                    src={"/star.png"}
                    alt="star"
                    height={30}
                    width={30}
                    className="mt--3"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="link"
        className="mt-4 text-indigo-600 text-xs hover:text-indigo-700 p-0 h-auto font-normal"
      >
        Show all key activities
      </Button>
    </div>
  );
}
