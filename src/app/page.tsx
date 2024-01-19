import MaxWidhthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, Check, CheckCircle, Ghost } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description: "Get your assets deliverd to your inbox instantly after purchase and start using them right away."
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description: "Every asset on our platform is verified by our team to ensure our highest quality standards."
  },
  {
    name: 'For the Planet',
    Icon: CheckCircle,
    description: "We plant a tree for every purchase made on our platform. Together we can make a difference."
  },

]

export default function Home() {
  return (
    <>
      <MaxWidhthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{' '}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by our team to ensure our highest quality standards.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href={'/products'} className={buttonVariants()}>Browse Trending</Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List products */}
      </MaxWidhthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidhthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {perks.map((perk) => (
              <div key={perk.name} className=": text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="flex justify-center md:shrink-0">
                  <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="size-1/3" />}
                  </div>
                </div>
                
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidhthWrapper>
      </section>
    </>
  )
}
