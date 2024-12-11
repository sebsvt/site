export default function PricingSection() {
  return (
    <section className="w-full py-16" id="pricing">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-neutral-800 dark:text-neutral-200">
            Everything You Need to Succeed, Without Breaking the Bank
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Simple, transparent, and designed to grow with your business.
          </p>
        </div>

        {/* Highlight Section */}
        <div className="mt-12 py-8 px-6">
          <h3 className="text-sm uppercase font-semibold tracking-wide text-blue-500">
            Flat Transaction Fee
          </h3>
          <p className="mt-4 text-7xl font-extrabold text-neutral-800 dark:text-neutral-100">
            2.63%
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            per transaction, no hidden charges.
          </p>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Includes PromptPay (1.65%) + our platform (0.98%)
          </p>
        </div>
      </div>
    </section>
  );
}
