import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxArrowLeft,
  RxArrowRight,
} from "react-icons/rx";

import { FaWordpress } from "react-icons/fa";
import { SiShopify } from "react-icons/si";

import { FreeMode, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Full-Stack Web Applications",
    description:
      "Building scalable, high-performance web apps using the MERN stack (MongoDB, Express, React, Node.js).",
  },
  {
    Icon: RxPencil2,
    title: "REST API & Backend Development",
    description:
      "Secure and optimized backend systems with authentication, authorization, and database architecture.",
  },
  {
    Icon: RxDesktop,
    title: "E-Commerce Solutions",
    description:
      "Custom online stores with payment integration, product management, and admin dashboards.",
  },
  {
    Icon: SiShopify,
    title: "Shopify Store Development",
    description:
      "Custom Shopify themes, app integration, and store setup for scalable e-commerce solutions.",
  },
  {
    Icon: FaWordpress,
    title: "WordPress Development",
    description:
      "WordPress websites, theme customization, plugin integration, and content management.",
  },
  {
    Icon: RxReader,
    title: "Admin Dashboards & Business Tools",
    description:
      "Data-driven dashboards with analytics, role-based access, and real-time updates.",
  },
  {
    Icon: RxRocket,
    title: "SaaS Application Development",
    description:
      "Subscription-based platforms with scalable architecture and cloud deployment.",
  },
  {
    Icon: RxRocket,
    title: "Deployment & Cloud Setup",
    description:
      "Deploying applications on VPS, Vercel, Netlify, and MongoDB Atlas with CI/CD.",
  },
];

const ServiceSlider = () => {
  return (
    <div className="relative px-12">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[FreeMode, Pagination, Navigation]}
        freeMode
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[rgba(65,47,123,0.25)] backdrop-blur-md h-full rounded-2xl px-6 py-8 flex flex-col gap-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.35)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-red-500">
                <item.Icon />
              </div>

              {/* title */}
              <div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>

              {/* arrow */}
              <div className="mt-auto text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-red-500 transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT BUTTON */}
      <div className="custom-prev absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300">
        <RxArrowLeft className="text-white text-xl" />
      </div>

      {/* RIGHT BUTTON */}
      <div className="custom-next absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300">
        <RxArrowRight className="text-white text-xl" />
      </div>
    </div>
  );
};

export default ServiceSlider;
