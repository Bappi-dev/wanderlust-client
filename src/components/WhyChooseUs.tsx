import { ShieldCheck, Map, Headphones } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority, with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#dcfbfc] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl tracking-tight text-foreground md:text-5xl">
          Why Choose <span className="font-bold">Wanderlust</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              size="default"
              className="shadow-sm ring-foreground/10"
            >
              <CardHeader>
                <feature.icon className="size-8 text-[#00c2cb]" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="mt-3 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
