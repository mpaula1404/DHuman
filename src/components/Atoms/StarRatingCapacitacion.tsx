import React from "react";

export const StarRatingCapacitacion = () => (
  <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-gray-400 text-xl">
        ★
      </span>
    ))}
  </div>
);
