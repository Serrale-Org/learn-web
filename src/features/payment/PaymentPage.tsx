import Image from "next/image";
import Link from "next/link";
import { Header } from "@/features/home/components/Header";
import { Footer } from "@/features/home/components/Footer";

export default function PaymentPage({
  searchParams,
}: {
  searchParams?: {
    slug?: string;
    title?: string;
    price?: string;
    thumb?: string;
  };
}) {
  const title = searchParams?.title ?? "Course";
  const price = searchParams?.price ?? "0.00";
  const thumb = searchParams?.thumb;

  return (
    <div className="flex flex-col">
      <Header />
      <main className="bg-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Form */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h1 className="text-3xl font-semibold tracking-tight mb-6">
                Please fill in the box
              </h1>

              <div className="grid grid-cols-3 gap-3 mb-6 text-sm">
                <div className="rounded-md border border-border px-3 py-2">
                  Credit/Debit
                </div>
                <div className="rounded-md border border-border px-3 py-2">
                  Paypal
                </div>
                <div className="rounded-md border border-border px-3 py-2">
                  Bank transfer
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Card holder</label>
                  <input
                    className="w-full border border-border rounded-md px-3 py-2 outline-none"
                    placeholder="John Carter"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Card number</label>
                  <input
                    className="w-full border border-border rounded-md px-3 py-2 outline-none"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm mb-1">Expiry</label>
                    <input
                      className="w-full border border-border rounded-md px-3 py-2 outline-none"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">CVC</label>
                    <input
                      className="w-full border border-border rounded-md px-3 py-2 outline-none"
                      placeholder="***"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-4 px-5 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold"
                >
                  Pay Now
                </button>
              </form>
            </div>

            {/* Right: Summary */}
            <div className="bg-white rounded-xl p-6 border border-border">
              {thumb && (
                <Image
                  src={thumb}
                  alt={title}
                  width={640}
                  height={360}
                  className="w-full rounded-md aspect-video object-cover"
                />
              )}
              <div className="mt-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {title.split(" ").map((w, i) =>
                    i === 0 ? (
                      w
                    ) : (
                      <span key={i} className="text-secondary">
                        {" "}
                        {w}
                      </span>
                    )
                  )}
                </h2>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-muted-foreground">
                    UI/UX • Beginner • Certificate
                  </span>
                  <span className="text-2xl font-semibold">Br {price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
