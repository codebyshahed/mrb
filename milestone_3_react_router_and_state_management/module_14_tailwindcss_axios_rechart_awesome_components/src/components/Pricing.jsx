import { CircleCheckBig } from "lucide-react";
import React, { use } from "react";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div className="w-full">
      <div className="max-w-285 mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingData.map((items, index) => (
            <div
              key={index}
              className="p-4 rounded-md border border-gray-200 space-y-2"
            >
              <h1 className="text-2xl">{items.planName}</h1>
              <p>
                ${items.price} USD / {items.duration}
              </p>

              <div className="p-2 rounded bg-slate-100 space-y-2">
                {items.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-x-2">
                    <span>
                      <CircleCheckBig size={15} />
                    </span>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
