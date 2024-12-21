"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LeadCardI } from "@/config/types";
import {
  LinkedinIcon,
  Pencil,
  SendHorizonal,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface LeadDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  lead: LeadCardI | null;
}

export default function LeadDetails({
  isOpen,
  onClose,
  lead,
}: LeadDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto custom-scrollbar bg-[#EEE]">
        <DialogHeader className="flex flex-row items-start justify-between">
          <DialogTitle>Engage with {lead?.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatar-m.png" />
              <AvatarFallback>JR</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm md:text-base">
                  {lead?.name}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src={"/linkedin.png"}
                  alt="linkedin"
                  height={20}
                  width={20}
                />
                <Separator
                  orientation="vertical"
                  className="mx-1 h-4 bg-black"
                />
                <p className="md:text-sm sm:text-xs text-[10px] text-muted-foreground">
                  {lead?.role}, {lead?.company}
                </p>
              </div>
            </div>
          </div>

          {/* Insight Card */}
          <Card className="bg-[#EEF]">
            <CardContent className="flex max-md:flex-col items-start justify-between p-4 gap-3 md:gap-0">
              <div className="flex items-center gap-2 md:w-2/3">
                <Image
                  src={"/star.png"}
                  alt="decision"
                  height={30}
                  width={30}
                />
                <div className="text-xs text-blue-600">{lead?.description}</div>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center text-[10px] gap-1 text-indigo-700 border rounded-md py-[1px] px-2 bg-white hover:bg-indigo-700 hover:text-white cursor-pointer duration-300 transition-all">
                  <Pencil size={12} className="" />
                  Edit
                </div>
                <div className="flex items-center text-[10px] gap-1 py-[1px] px-2 rounded-md font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 cursor-pointer">
                  <SendHorizonal size={12} />
                  Approve and Send
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 border-b pb-4">
            <Button variant="outline">Engage</Button>
            <Button variant="outline">Search</Button>
          </div>

          {/* Why Picked Section */}
          <div className="space-y-1 bg-white p-3 rounded-lg">
            <div className=" bg-[#EEF] relative p-4 rounded-md">
              <h3 className="font-semibold text-sm mb-2 text-indigo-700">
                Why I picked this lead
              </h3>
              <Image
                src={"/star.png"}
                alt="decision"
                height={35}
                width={35}
                className="absolute top-0 right-0 bg-white p-1 border border-none rounded-bl-md"
              />
              <ul className="space-y-1 text-xs">
                {lead?.whyPicked?.map((pick, index) => (
                  <li key={index} className="list-disc ml-4">
                    {pick}
                  </li>
                ))}
              </ul>
              <div className="flex max-sm:flex-col gap-4 mt-4">
                <Card className="shadow-lg">
                  <CardContent className="p-2 flex items-center gap-3">
                    <Image
                      src={"/decision.png"}
                      alt="decision"
                      height={40}
                      width={40}
                    />
                    <div className="flex flex-col">
                      <div className="text-xs text-muted-foreground font-bold">
                        Decision maker
                      </div>
                      <div className="font-bold text-[#765AC9] text-sm">
                        Yes
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-lg">
                  <CardContent className="p-2 flex items-center gap-3">
                    <Image
                      src={"/potential.png"}
                      alt="decision"
                      height={40}
                      width={40}
                    />
                    <div className="flex flex-col">
                      <div className="text-xs text-muted-foreground font-bold">
                        Potential deal value
                      </div>
                      <div className="font-bold text-[#765AC9] text-sm">
                        {lead?.potentialValue}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-lg">
                  <CardContent className="p-2 flex items-center gap-3">
                    <Image
                      src={"/intent.png"}
                      alt="decision"
                      height={40}
                      width={40}
                    />
                    <div className="flex flex-col">
                      <div className="text-xs text-muted-foreground font-bold">
                        Intent
                      </div>
                      <div className="font-bold text-[#765AC9] text-sm">
                        {lead?.intent}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">D365 Sales +2</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-2 shadow-md p-4 rounded-xl bg-white">
            <h3 className="font-semibold text-sm sm:text-base">About {lead?.name.split(" ")[0]}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{lead?.about}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
