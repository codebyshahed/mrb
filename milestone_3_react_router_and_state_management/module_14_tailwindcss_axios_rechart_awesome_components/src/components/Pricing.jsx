import { CircleCheckBig } from "lucide-react";
import React, { use } from "react";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div className="w-full">
      <div className="max-w-285 mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((items, index) => (
            <div
              key={index}
              className="p-4 rounded-md border border-gray-200 space-y-2 flex flex-col"
            >
              <h1 className="text-2xl">{items.planName}</h1>
              <p>
                ${items.price} USD / {items.duration}
              </p>

              <div className="p-2 rounded bg-slate-100 space-y-2 flex-1">
                {items.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-x-2">
                    <span>
                      <CircleCheckBig className="text-green-500" size={16} />
                    </span>
                    <p className="text-base">{feature}</p>
                  </div>
                ))}
              </div>

              <button className="px-4 py-3 w-full rounded bg-zinc-900 cursor-pointer text-slate-200 mt-2.5 duration-200 hover:bg-zinc-700">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
