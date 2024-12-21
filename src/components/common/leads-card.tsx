import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, PlusCircle } from "lucide-react";
import type { LeadCard } from "@/config/types";
import Image from "next/image";

export function LeadCard({
  name,
  role,
  company,
  description,
  tag1,
  tag2,
}: LeadCard) {
  return (
    <Card className="w-full">
      <CardContent className="pt-2">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={`/avatar-m.png`} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <Image
                src={"/copilot.png"}
                alt="copilot"
                width={18}
                height={18}
                className="absolute bottom-0 right-0 border rounded-full bg-white p-[1px]"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm">{name}</h3>
                <p className="text-[10px] text-muted-foreground">
                  {role} • {company}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-start bg-[#eef] p-2 rounded-md relative">
              <div className="flex items-center gap-1">
                <Mail size={20} />
                <p className="font-bold text-xs w-[90%]">Engage with {name}</p>
              </div>
              <p className="mt-2 text-xs">{description}</p>
              <Image
                src={"/star.png"}
                alt="copilot"
                width={30}
                height={30}
                className="absolute top-[-4px] right-[-8px] border border-none rounded-bl-md bg-white p-[1px]"
              />
            </div>
            <div className="mt-2 flex gap-2">
              <span className="text-[10px]">
                {tag1} • {tag2}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
