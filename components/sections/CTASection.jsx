import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and estimate on your electrical needs.
            Our team is ready to provide the expertise and quality service you deserve.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
            <Link href="/contact">
              Get a Free Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}