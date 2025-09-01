import FeatureCard from "@/components/elements/FeaturCard";
import {
  FaPhone,
  FaWhatsapp,
  FaLocationArrow,
  FaInternetExplorer,
} from "react-icons/fa";
export default function ContactWaysCard() {
  const items = [
    {
      id: 1,
      icon: <FaPhone />,
      title: "تماس: 02126612786",
      href: "tel:02126612786",
    },
    // {
    //   id: 2,
    //   icon: <FaWhatsapp />,
    //   title: "تماس: 02126612786",
    // },
    {
      id: 3,
      icon: <FaLocationArrow />,
      title: "تهران، پاسداران، بوستان پنجم، پ84",
      href: "#",
    },
    {
      id: 4,
      icon: <FaInternetExplorer />,
      title: "info@sparkup-agency.com",
      href: "mailto:info@sparkup-agency.com",
    },
  ];

  return (
    <>
      <div className="flex lg:flex-row flex-wrap items-center justify-evenly gap-10">
        {items.map((i) => (
          <FeatureCard title={i.title} key={i.id} icon={i.icon} href={i.href}/>
        ))}
      </div>
    </>
  );
}
