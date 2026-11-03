import Hero from "@/components/Hero/Hero";
import BookingSearch from "@/components/BookingSearch/BookingSearch";
import Services from "@/components/Services/Services";
import TourPackages from "@/components/TourPackages/TourPackages";
import Corporate from "@/components/Corporate/Corporate";
import Fleet from "@/components/Fleet/Fleet";
import Contact from "@/components/Contact/Contact";

export default function HomePage() {
  return <>
    <BookingSearch />
    <Hero />
    <Services />
    <TourPackages />
    <Fleet />
    <Corporate />
    <Contact />
  </>;
}
