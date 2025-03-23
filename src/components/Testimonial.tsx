import { twMerge } from "tailwind-merge";

export interface TCard {
  quote: string;
  customer: {
    name: string;
    role: string;
    farmname: string;
    image: string;
  };
  classname?: string;
}

export const Card = ({ quote, customer, classname }: TCard) => {
  return (
    <div
      className={twMerge(
        "h-full rounded-lg bg-gradient-to-b from-white via-gray-50 to-white shadow-md ring-1 ring-[#334E68]/50 transition-transform hover:-translate-y-1 hover:shadow-lg",
        classname
      )}
    >
      <div className="flex h-full flex-col justify-between p-4 sm:p-6 md:p-8">
        <blockquote className="mb-6 leading-relaxed text-base md:text-lg font-serif italic">
          {quote}
        </blockquote>
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-3">
            <div className="font-semibold text-sm sm:text-base text-[#334E68]">
              {customer.name}
            </div>
            <div className="text-xs text-gray-400 sm:text-sm">
              {customer.role} / {customer.farmname}
            </div>
          </div>
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-lg">
            <img
              src={customer.image}
              alt={customer.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
