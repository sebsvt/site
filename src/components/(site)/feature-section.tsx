import { DollarSign, TrendingUp, Activity, Headphones } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Our 2.63% fee includes unavoidable payment gateway costs and just 0.98% for our platform—delivering simplicity and value without hidden charges.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Ready Platform",
    description:
      "Our platform scales effortlessly with your business, ensuring you’re always equipped to handle growing demands.",
  },
  {
    icon: Activity,
    title: "Actionable Analytics",
    description:
      "Gain real-time insights into your transactions and performance with robust analytics tools, designed to keep you informed.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is here to help you 24/7, ensuring your business runs smoothly at all times.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full pb-16 md:pb-24 lg:pb-32">
      <div className="container px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-lg rounded-lg p-6 transition hover:shadow-xl"
            >
              <div className="mb-4 rounded-full p-3">
                <feature.icon className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
