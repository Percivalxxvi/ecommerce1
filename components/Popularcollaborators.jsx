import React from "react";

const partners = [
  {
    name: "LG Electronics",
    logo: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-2-h.png",
    href: "#",
  },
  {
    name: "iPhone",
    logo: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-1-h.png",
    href: "#",
  },
  {
    name: "Samsung",
    logo: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-3-h.png",
    href: "#",
  },
  {
    name: "Huawei",
    logo: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-4-h.png",
    href: "#",
  },
  {
    name: "Bosch",
    logo: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-5-h.png",
    href: "#",
  },
  {
    name: "Samsonite",
    logo: "https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-client-6-h.png",
    href: "#",
  },
];

export default function PopularCollaborators() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Shop by your Favorite Brands
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {partners.map((brand, idx) => (
            <a
              key={idx}
              href={brand.href}
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-50 sm:h-16 object-contain"
              />
              <span className="mt-2 text-sm text-gray-600">{brand.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
