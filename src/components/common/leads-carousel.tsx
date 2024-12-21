"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LeadCard } from "./leads-card";

const LeadCardsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leads = [
    {
      name: "Jane Reyes",
      role: "COO",
      company: "Northwind Traders",
      description:
        "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      tag1: "High buying intent",
      tag2: "Expand business",
    },
    {
      name: "Allan Mung",
      role: "Head of Real Estate Dev.",
      company: "Contoso Coffee",
      description:
        "Prepare for high-buying meeting scheduled for 2 PM regarding upgrading service contract.",
      tag1: "Upcoming meeting",
      tag2: "Due today",
    },
    {
      name: "Sarah Chen",
      role: "VP Operations",
      company: "Metro Cafe Group",
      description:
        "Looking to discuss franchise opportunities and equipment solutions for new locations.",
      tag1: "Growth potential",
      tag2: "New lead",
    },
    {
      name: "Mark John",
      role: "Procurement Director",
      company: "Sunrise Beverages",
      description:
        "Interested in bulk order of commercial coffee machines for chain-wide upgrade.",
      tag1: "Large order",
      tag2: "Priority lead",
    },
    {
      name: "Elena Zing",
      role: "Operations Manager",
      company: "CityBrew Coffee",
      description:
        "Seeking maintenance contract renewal and potential upgrade package.",
      tag1: "Renewal opportunity",
      tag2: "Existing client",
    },
  ];

  const totalSlides = Math.ceil(leads.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleLeads = () => {
    const startIdx = currentSlide * 2;
    const endIdx = Math.min(startIdx + 2, leads.length);
    return leads.slice(startIdx, endIdx);
  };

  return (
    <div className="w-full px-4 rounded-md relative">
      <div className="relative overflow-hidden">
        <div className="grid gap-6 md:grid-cols-2">
          {getVisibleLeads().map((lead, index) => (
            <LeadCard
              key={`${currentSlide}-${index}`}
              name={lead.name}
              role={lead.role}
              company={lead.company}
              description={lead.description}
              tag1={lead.tag1}
              tag2={lead.tag2}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full absolute left-[-5px] top-1/2 transform -translate-y-1/2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full absolute right-[-5px] top-1/2 transform -translate-y-1/2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default LeadCardsCarousel;
