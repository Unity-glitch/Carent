import React, { useState } from "react";

// FIXED: Hardcoded all the data from the Figma template directly inside the component
const faqsData = [
  {
    question: "How does it work?",
    answer:
      "Simply browse our active digital fleet catalog, select your vehicle classification matrix, choose your pickup/drop-off intervals, and settle payment parameters securely inline.",
  },
  {
    question: "Can I rent a car without a credit card?",
    answer:
      "Yes, we accept major verified debit configurations and modern banking wire processing transfers, provided safety insurance hold requirements are processed.",
  },
  {
    question: "What are the requirements for renting a car?",
    answer:
      "You must present a valid, unexpired driver's authorization license credential document, be at least 21 years of age, and provide an official verification passport or ID.",
  },
  {
    question:
      "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
    answer:
      "Towing is strictly prohibited across our standard fleet vehicles to protect transmission mechanics. Please contact corporate logistics for specialized truck setups.",
  },
  {
    question:
      "Does Car Rental offer coverage products for purchase with my rental?",
    answer:
      "Yes, we provide scalable Collision Damage Waivers (CDW) and comprehensive roadside protection matrices options directly during checkout parameters.",
  },
];

// FIXED: Uses 'faqsData' as a default if no custom 'items' prop is provided
export default function Accordion({ items = faqsData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            {/* Accordion Header Trigger */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 transition-colors duration-200 hover:text-blue-600"
            >
              <span className="text-base tracking-tight">{item.question}</span>
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-full bg-gray-50 text-gray-500 font-bold text-lg transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Accordion Content Panel */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-60 border-t border-gray-50" : "max-h-0"
              }`}
            >
              <p className="p-5 text-sm text-gray-500 leading-relaxed bg-gray-50/40">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
