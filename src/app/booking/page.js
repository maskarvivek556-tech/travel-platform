import BookingForm from "./BookingForm";

export const metadata = {
  title: "Complete Your Booking | TravelEase",
  description: "Enter your traveller details to continue with a demo booking.",
};

function getValue(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

export default async function BookingPage({ searchParams }) {
  const params = await searchParams;

  return (
    <BookingForm
      trip={{
        type: getValue(params.type, "Travel"),
        name: getValue(params.trip, "Your selected trip"),
        price: getValue(params.price, "Price shown at checkout"),
        from: getValue(params.from, "Pune"),
        to: getValue(params.to, "Mumbai"),
        date: getValue(params.date),
        people: getValue(params.people, "2 passengers"),
      }}
    />
  );
}
