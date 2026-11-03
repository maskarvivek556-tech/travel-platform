import VehicleDetailsPage, {
  generateStaticParams,
} from "@/components/Fleet/slug/page";

export { generateStaticParams };

export default function FleetVehicleRoute({ params }) {
  return <VehicleDetailsPage params={params} />;
}
