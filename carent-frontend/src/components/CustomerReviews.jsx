import React from "react";

export default function CustomerReviews() {
  const reviews = [
    {
      text: "The rental framework was completely seamless. Booking was straightforward and getting the keys took less than 5 minutes on-site.",
      name: "Emmanuel Nduka",
      role: "Verified Client",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    },
    {
      text: "Flawless fleet preparation. The mechanical reliability and cleanliness of the Mercedes sedan exceeded our expectations for the trip.",
      name: "Ryan Bowyer",
      role: "Business Traveler",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
      text: "Extremely helpful support options and clear pricing matrix. There were absolutely no surprise check-out fees or hidden line items.",
      name: "Dylan Watson",
      role: "Frequent Renter",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Block Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Reviews from our customers
          </h2>
        </div>

        {/* 3-Column Review Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full"
            >
              {/* Top section: quote mark + centered review text */}
              <div className="bg-gray-50 flex-1 px-6 pt-8 pb-6">
                <span className="text-5xl  font-serif font-black text-indigo-600 leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-sm text-gray-600 leading-relaxed mt-2 text-center">
                  {rev.text}
                </p>
              </div>

              {/* Bottom purple block — avatar anchored to this section's top edge */}
              <div className="bg-indigo-600 relative text-center px-6 pt-16 pb-6">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="absolute left-1/2 -translate-x-1/2 -top-7   z-10 w-22 h-22 rounded-full object-cover border-6   border-white shadow-lg"
                />
                <p className="text-xs text-indigo-200 font-medium">
                  {rev.role}
                </p>
                <h4 className="text-white font-bold mt-1">{rev.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
