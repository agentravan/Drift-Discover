import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import FixedTrips from "@/components/FixedTrips";
import Pricing from "@/components/Pricing";
import InfoSections from "@/components/InfoSections";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 overflow-hidden">
      <Hero />
      <Destinations />
      <FixedTrips />
      <Pricing />
      <InfoSections />
      <Testimonials />
      <Gallery />
      <LeadForm />
      
      <footer className="bg-dark-900 border-t border-white/5 py-12 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-2xl font-poppins font-bold tracking-wider text-white mb-6">
            DRIFT<span className="text-primary-500">&</span>DISCOVER
          </div>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Your premium travel partner in Delhi NCR for group trips and corporate tours.
          </p>
          <div className="flex justify-center space-x-6 mb-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cancellation Policy</a>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Drift & Discover. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
