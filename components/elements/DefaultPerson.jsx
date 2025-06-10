import Image from "next/image";
import profile from "@/public/images/profile.jpg";

export default function DefaultPerson({ width, height, ...classess }) {
  return <Image src={profile} {...classess} alt="default person" fill />;
}
