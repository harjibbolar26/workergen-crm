"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { LeadCard } from "./leads-card";
import LeadDetails from "./leads-details";
import { Lead, LeadCardI } from "@/config/types";
import { LeadCard } from "./leads-card";

const LeadCardsCarousel = ({ openDetails }: { openDetails: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const leads = [
    {
      name: "Jane Reyes",
      role: "COO",
      company: "Northwind Traders",
      about:
        "Jane Reyes, the COO of Northwind Traders, leads operations across their network of in-store coffee shops. Her strategic focus on modernizing their coffee service offerings has driven significant revenue growth. Jane's interest in upgrading their espresso machines aligns with her vision for delivering premium coffee experiences, making her an ideal partner for First Coffee's high-end equipment solutions.",
      description:
        "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      whyPicked: [
        "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website",
        "Current in-store coffee shops show potential for significant equipment upgrade",
        "Multiple locations present opportunity for bulk deployment of premium machines",
      ],
      potentialValue: "$1M",
      intent: "High",
      tag1: "High buying intent",
      tag2: "Expand business",
    },
    {
      name: "Allan Munger",
      role: "Head of Real Estate Development",
      company: "Contoso Coffee",
      about:
        "Allan Munger, Head of Real Estate Development at Contoso Coffee, spearheads the company's physical expansion strategy. His expertise in scaling operations while maintaining service quality has been crucial to Contoso's growth. Allan's focus on comprehensive service contracts demonstrates his commitment to long-term operational excellence, making him a prime candidate for First Coffee's premium service offerings.",
      description:
        "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
      whyPicked: [
        "Allan is a key decision maker with an immediate upcoming meeting",
        "Real estate development role indicates expansion plans",
        "Service contract upgrade discussion presents immediate revenue opportunity",
      ],
      potentialValue: "$1.3M",
      intent: "High",
      tag1: "Upcoming meeting",
      tag2: "Due today",
    },
    {
      name: "Sarah Chen",
      role: "VP Operations",
      company: "Metro Cafe Group",
      about:
        "Sarah Chen, VP Operations at Metro Cafe Group, drives the company's operational strategy and expansion initiatives. Her data-driven approach to growth and strong focus on standardization across locations has established Metro Cafe as a rising star in the industry. Sarah's interest in franchise opportunities presents a perfect alignment with First Coffee's scalable equipment solutions.",
      description:
        "Looking to discuss franchise opportunities and equipment solutions for new locations.",
      whyPicked: [
        "Sarah is a key decision maker exploring franchise expansion",
        "New locations require complete equipment solutions",
        "Multi-location opportunity represents significant potential value",
      ],
      potentialValue: "$750k",
      intent: "Medium",
      tag1: "Growth potential",
      tag2: "New lead",
    },
    {
      name: "Marcus Johnson",
      role: "Procurement Director",
      company: "Sunrise Beverages",
      about:
        "Marcus Johnson, Procurement Director at Sunrise Beverages, oversees equipment acquisition and vendor relationships across their entire chain. His systematic approach to large-scale deployments has helped maintain consistency across all locations. Marcus's interest in a chain-wide upgrade presents an ideal opportunity for First Coffee to demonstrate our bulk fulfillment capabilities and premium equipment line.",
      description:
        "Interested in bulk order of commercial coffee machines for chain-wide upgrade.",
      whyPicked: [
        "Marcus is a key decision maker planning a chain-wide upgrade",
        "Bulk order opportunity indicates substantial deal value",
        "Procurement role suggests immediate purchasing authority",
      ],
      potentialValue: "$2M",
      intent: "High",
      tag1: "Large order",
      tag2: "Priority lead",
    },
    {
      name: "Elena Rodriguez",
      role: "Operations Manager",
      company: "CityBrew Coffee",
      about:
        "Elena Rodriguez, Operations Manager at CityBrew Coffee, has built a reputation for operational excellence and consistent service quality. Her hands-on management style and focus on preventive maintenance have helped CityBrew maintain high customer satisfaction levels. Elena's interest in combining renewal with upgrades demonstrates her forward-thinking approach to equipment management, making her an excellent candidate for First Coffee's comprehensive solutions.",
      description:
        "Seeking maintenance contract renewal and potential upgrade package.",
      whyPicked: [
        "Elena is a key decision maker considering both renewal and upgrade",
        "Existing client relationship provides strong foundation",
        "Combined maintenance and upgrade package presents upsell opportunity",
      ],
      potentialValue: "$850k",
      intent: "Medium",
      tag1: "Renewal opportunity",
      tag2: "Existing client",
    },
  ];

  const cardsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(leads.length / cardsPerSlide);

  const handleSlideChange = (direction: string) => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const getVisibleLeads = () => {
    const startIdx = currentSlide * cardsPerSlide;
    const endIdx = Math.min(startIdx + cardsPerSlide, leads.length);
    return leads.slice(startIdx, endIdx);
  };

  const [selectedLead, setSelectedLead] = useState<LeadCardI | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDetails = (lead: LeadCardI) => {
    setSelectedLead(lead);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full px-4 relative">
      <div className="overflow-hidden">
        <div
          className="grid gap-6 md:grid-cols-2 transition-opacity duration-300"
          style={{ opacity: isAnimating ? 0 : 1 }}
        >
          {getVisibleLeads().map((lead, index) => (
            <div
              key={`${currentSlide}-${index}`}
              className="transition-all duration-300 ease-in-out"
            >
              <LeadCard
                name={lead.name}
                role={lead.role}
                company={lead.company}
                description={lead.description}
                tag1={lead.tag1}
                tag2={lead.tag2}
                openDetails={() => handleOpenDetails(lead)}
              />
            </div>
          ))}
          <LeadDetails
            lead={selectedLead}
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />
        </div>
      </div>

      <div className=" flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleSlideChange("prev")}
          disabled={currentSlide === 0 || isAnimating}
          className="rounded-full absolute -left-1 top-1/2 transform -translate-y-1/2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleSlideChange("next")}
          disabled={currentSlide === totalSlides - 1 || isAnimating}
          className="rounded-full absolute -right-1 top-1/2 transform -translate-y-1/2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default LeadCardsCarousel;
