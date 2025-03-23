import { Card, TCard } from "./Testimonial";



const testimonials: TCard[] = [
    {
      quote:
        "Mibimpex's essential oils and alternative medicines have transformed our approach to farming. We've seen improved crop health and a significant reduction in chemical usage.",
      customer: {
        name: "Robert Lee",
        role: "Sustainable Farmer",
        farmname: "Harvest Field",
        image: "https://www.mibimpex.com/assets/founder1.webp",
      },
      classname: "bg-white shadow-2xl row-span-2"
    },
    {
      quote:
        "Switching to Mibimpex's natural products was a turning point for our farm. Their essential oils boost plant growth and improve soil vitality, all while being environmentally friendly.",
      customer: {
        name: "Emily Clark",
        role: "Organic Farmer",
        farmname: "Green Valley",
        image: "https://www.mibimpex.com/assets/founder1.webp",
      },
    },
    {
      quote:
        "I value Mibimpex for their commitment to natural farming. Their alternative medicines offer a safer, effective solution for pest control and plant nutrition without synthetic chemicals.",
      customer: {
        name: "Ahmed Khan",
        role: "Agroecologist",
        farmname: "Sunrise Orchards",
        image: "https://www.mibimpex.com/assets/founder1.webp",
      },
    },
    {
        quote:
          "Integrating Mibimpex's natural essential oils has remarkably increased the resistance of our crops against common diseases. Their products are a sustainable choice for modern farming.",
        customer: {
          name: "Sarah Mitchell",
          role: "Herbal Agronomist",
          farmname: "Sunrise Farmstead",
          image: "https://www.mibimpex.com/assets/finance.webp",
        },
      },
      {
        quote:
          "The unique blend of alternative medicines from Mibimpex has helped us achieve a harmonious balance between productivity and environmental care. Our yields have improved steadily.",
        customer: {
          name: "Lucas Fernandez",
          role: "Eco-Farmer",
          farmname: "Green Horizons",
          image: "https://www.mibimpex.com/assets/finance.webp",
        },
      },
      {
        quote:
          "Mibimpex's essential oils are a game-changer in natural farming. The subtle, organic compounds have not only enhanced plant growth but also promoted soil regeneration.",
        customer: {
          name: "Priya Sharma",
          role: "Sustainable Agriculturist",
          farmname: "Vitality Farms",
          image: "https://www.mibimpex.com/assets/finance.webp",
        },
      },
      {
        quote:
          "After incorporating Mibimpex's alternative medicines, we noticed a drastic reduction in pest attacks. Their natural approach is truly a breakthrough for eco-conscious farmers.",
        customer: {
          name: "Daniela Perez",
          role: "Organic Cultivator",
          farmname: "EcoAgri Ventures",
          image: "https://www.mibimpex.com/assets/finance.webp",
        },
        classname:"bg-teal-700 text-white  row-span-2 col-start-3 row-start-2"
      },
  ];
  

export const Grid = ()=>{
    return(
      <div className="p-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, index)=>
                  <Card key={index} quote={t.quote} customer= {t.customer} classname={t.classname}/>
              )}
          </div>
      </div>
    )
    
};
