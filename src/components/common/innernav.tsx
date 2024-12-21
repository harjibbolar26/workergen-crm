"use client";

import * as React from "react";
import {
  ChevronDown,
  LayoutGrid,
  List,
  Plus,
  RefreshCcw,
  Share2,
  Trash2,
  LineChart,
  Brain,
  SlidersHorizontal,
  Table,
  Search,
  ChartArea,
  RotateCcw,
  Users,
  EllipsisVertical,
  Clock2,
  ListFilter,
  Columns3,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function InnerNav() {
  return (
    <div className="flex items-center justify-between w-full shadow-lg shadow-slate-400 px-4">
      <div className="flex items-center justify-between gap-2 w-full">
        <Button variant="ghost" className="gap-1 px-2 font-normal text-xs">
          My open leads
          <ChevronDown className="size-4 opacity-50" />
        </Button>

        {/* <Separator orientation="vertical" className="mx-1 h-6" />    */}
        <div className="flex items-center text-xs gap-1">
          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <ChartArea className="size-4" />
                  <p className="max-lg:hidden">Show chart</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">Show chart</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <List className="size-4" />
                  <p className="max-lg:hidden">Focused view</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">
                Focused view
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Plus className="size-4" />
                  <p className="max-lg:hidden">New</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">New</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <RotateCcw className="size-4" />
                  <p className="max-lg:hidden">Refresh</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">Refresh</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Users className="size-4" />
                  <p className="max-lg:hidden">Collaborate</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">Collaborate</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Trash2 className="size-4" />
                  <p className="max-lg:hidden">Delete</p>
                  <span>|</span>
                  <ChevronDown className="size-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">Delete</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <span>
              <EllipsisVertical className="size-4" />
            </span>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Clock2 className="size-4" />
                  <p className="max-lg:hidden">Smart data</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">Smart data</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <ListFilter className="size-4" />
                  <p className="max-lg:hidden">Edit filters</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">
                Edit filters
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer hover:border hover:border-black hover:p-1 hover:rounded-md transition-all duration-300">
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Columns3 className="size-4" />
                  <p className="max-lg:hidden">Edit columns</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="lg:hidden">
                Edit columns
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center items-center gap-1 cursor-pointer bg-blue-600  text-white p-[6px] rounded-sm hover:border hover:border-black hover:rounded-md hover:bg-white hover:text-black transition-all duration-300">
            <span className="flex items-center gap-1">
              <SquareArrowOutUpRight className="size-3" />
              <Separator
                orientation="vertical"
                className="h-3 bg-white w-[1.5px] text-white"
              />
              <ChevronDown className="size-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
