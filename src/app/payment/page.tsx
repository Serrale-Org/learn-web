import PaymentPage from "@/features/payment/PaymentPage";

export default function Payment({
  searchParams,
}: {
  searchParams?: {
    slug?: string;
    title?: string;
    price?: string;
    thumb?: string;
  };
}) {
  return <PaymentPage searchParams={searchParams} />;
}
