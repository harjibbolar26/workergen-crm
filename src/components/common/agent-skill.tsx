"use client";

import { Mail, Package, ShoppingCart, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import Image from "next/image";

interface AgentSkillDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onClose: () => void;
}

export default function AgentSkillDialog({
  isOpen,
  setIsOpen,
  onClose,
}: AgentSkillDialogProps) {
  //   const [isOpen, setIsOpen] = useState(false);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(true);
  const [email, setEmail] = useState("purchasing@contoso.com");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Configure Agent Skill</Button> */}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
            <Image src={"/copilot.png"} alt="copilot" width={18} height={18} />
            Agent skill
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Collapsible
            open={isCollapsibleOpen}
            onOpenChange={setIsCollapsibleOpen}
            className="space-y-2"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4">
              <h3 className="text-sm font-medium">
                Check if on-hand inventory will allow all sales orders to ship
                without delay
              </h3>
              <svg
                className={`h-4 w-4 transition-transform ${
                  isCollapsibleOpen ? "rotate-180 transform" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 rounded-md bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                When{" "}
                <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-blue-700">
                  <Users className="h-4 w-4" /> any vendor
                </span>{" "}
                sends an email with changes to{" "}
                <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-blue-700">
                  <Mail className="h-4 w-4" /> confirmed purchase orders
                </span>
                , check if the resulting{" "}
                <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-blue-700">
                  <Package className="h-4 w-4" /> on-hand inventory
                </span>{" "}
                will allow{" "}
                <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-blue-700">
                  <ShoppingCart className="h-4 w-4" /> all sales orders
                </span>{" "}
                to{" "}
                <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-blue-700">
                  <Truck className="h-4 w-4" /> ship without delay
                </span>
                . If so,{" "}
                <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-blue-700">
                  <Mail className="h-4 w-4" /> update the purchase order
                </span>{" "}
                to reflect the change.
              </p>
            </CollapsibleContent>
          </Collapsible>

          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-lg font-medium">
              <Image
                src={"/outlook.png"}
                alt="copilot"
                width={18}
                height={18}
              />
              Enable email access
            </h3>
            <p className="text-sm text-slate-600">
              Allow the agent to access email inboxes to read mail from known
              vendors
            </p>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                {/* <div className="absolute inset-y-0 left-3 flex items-center bg-orange-200 rounded-full p-1">
                    P
                </div> */}
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-5"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600">
                Allow access
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className=" flex justify-end mt-5">
          <Button onClick={() => setIsOpen(false)}>Activate</Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
