import { services } from "@/components/constants/services";
import CustomButton from "@/components/elements/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaServicestack } from "react-icons/fa";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col font-azar items-center justify-center mt-10 md:mt-32">
      <div className="w-full p-4 md:p-0 md:w-1/2">
        <div className="text-center flex flex-col items-center justify-evenly mb-10">
          <Image
            alt={`image-${params.slug}`}
            src={service.icon}
            height={200}
            width={200}
            className="w-32 h-32"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            {service.title}
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            {service.shortDescription}
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            جزئیات خدمات
          </h2>
          <ul className="space-y-4">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 ml-3">✓</span>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link href={"/services"}>
            <CustomButton rightIcon={<FaServicestack />}>
              صفحه خدمات
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
