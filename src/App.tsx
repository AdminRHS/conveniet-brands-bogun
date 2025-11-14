import React from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logoImage from 'figma:asset/a6b1af68c3160d6358edbdc5df0887ee77482859.png';
import { 
  ArrowRight,
  Building2,
  Code2,
  CreditCard,
  TrendingUp,
  Check,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-12 px-4">
      {/* Email Container - Responsive */}
      <div className="max-w-[700px] mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* HEADER */}
        <header className="bg-white px-6 py-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Convenient Brands Logo" 
                className="h-10 w-auto"
              />
              <span className="text-[#123455]">Convenient Brands</span>
            </div>
            
            {/* Visit Website Link */}
            <a href="#" className="text-[#6ab744] text-sm flex items-center gap-1 hover:underline">
              Visit Website <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#123455] via-[#1a4d6f] to-[#6ab744] overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2MzA0MDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 px-6 md:px-8 py-12">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center">
              <p className="text-[#6ab744] text-sm mb-4">MEET CONVENIENT BRANDS</p>
              <h1 className="text-white text-[42px] leading-[1.1] mb-6">
                Vertical software and integrated payments, together.
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Hi $[FNAME]$, we're building the future of industry-specific software combined with seamless payment solutions. Join thousands of businesses transforming their operations.
              </p>
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-[#6ab744] hover:bg-[#5aa038] text-white px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  Talk to our team <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1637401937636-f7d5bb75e0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwZ3JhZGllbnR8ZW58MXx8fHwxNzYzMTI1MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hero illustration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6ab744]/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* WHO IS CONVENIENT BRANDS SECTION */}
        <section className="px-6 md:px-8 py-12 bg-[#F2F4F7]">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#123455] to-[#6ab744] rounded-2xl flex items-center justify-center shadow-md">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-[#123455] text-[32px] mb-4">Who is Convenient Brands?</h2>
                <p className="text-[#555555] text-lg leading-relaxed mb-4">
                  Convenient Brands is a family of specialized SaaS and integrated payment platforms designed for vertical industries. We combine powerful software solutions with seamless payment processing to help businesses operate more efficiently and grow faster.
                </p>
                <p className="text-[#555555] text-lg leading-relaxed">
                  From automotive dealerships to collision repair shops, from property management to government services, our portfolio of brands serves thousands of businesses across North America with industry-specific tools they can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="px-6 md:px-8 py-12 bg-[#F8FAFC]">
          <h2 className="text-[#123455] text-[32px] text-center mb-10">What We Do</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Vertical Software */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6ab744]/10 to-[#6ab744]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-10 h-10 text-[#6ab744]" />
              </div>
              <h3 className="text-[#222222] text-[22px] mb-3">Vertical Software</h3>
              <p className="text-[#555555] leading-relaxed">
                Industry-specific software solutions built for automotive, property management, and specialized service providers.
              </p>
            </div>

            {/* Integrated Payments */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6ab744]/10 to-[#6ab744]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-[#6ab744]" />
              </div>
              <h3 className="text-[#222222] text-[22px] mb-3">Integrated Payments</h3>
              <p className="text-[#555555] leading-relaxed">
                Seamless payment processing embedded directly into your workflow for faster transactions and better cash flow.
              </p>
            </div>

            {/* Growth & Revenue */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6ab744]/10 to-[#6ab744]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-[#6ab744]" />
              </div>
              <h3 className="text-[#222222] text-[22px] mb-3">Growth & Revenue</h3>
              <p className="text-[#555555] leading-relaxed">
                Data-driven insights and analytics that help you make smarter decisions and unlock new revenue streams.
              </p>
            </div>
          </div>
        </section>

        {/* OUR FAMILY OF BRANDS SECTION */}
        <section className="px-6 md:px-8 py-12 bg-white">
          <h2 className="text-[#123455] text-[32px] text-center mb-10">Our Family of Brands</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* IntelliPay */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#6ab744] hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white">IP</span>
              </div>
              <h3 className="text-[#222222] text-lg mb-2">IntelliPay</h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                Cloud-based payment platform for modern businesses across all industries.
              </p>
            </div>

            {/* Mainstreet Computers */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#6ab744] hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white">MS</span>
              </div>
              <h3 className="text-[#222222] text-lg mb-2">Mainstreet Computers</h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                Comprehensive shop management software for auto glass professionals.
              </p>
            </div>

            {/* ROME Technologies */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#6ab744] hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white">RT</span>
              </div>
              <h3 className="text-[#222222] text-lg mb-2">ROME Technologies</h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                Advanced repair order management and estimating for auto repair shops.
              </p>
            </div>

            {/* ImEX Systems */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#6ab744] hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white">IX</span>
              </div>
              <h3 className="text-[#222222] text-lg mb-2">ImEX Systems</h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                Leading automotive technology and software solutions in Canada.
              </p>
            </div>

            {/* Web-Est */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#6ab744] hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white">WE</span>
              </div>
              <h3 className="text-[#222222] text-lg mb-2">Web-Est</h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                Web-based collision estimating for independent repair facilities.
              </p>
            </div>

            {/* Dealer Pay */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#6ab744] hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white">DP</span>
              </div>
              <h3 className="text-[#222222] text-lg mb-2">Dealer Pay</h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                Streamlined payment solutions designed specifically for dealerships.
              </p>
            </div>
          </div>
        </section>

        {/* WHY BUSINESSES CHOOSE US SECTION */}
        <section className="px-6 md:px-8 py-12 bg-white border-t border-gray-100">
          <h2 className="text-[#123455] text-[32px] text-center mb-10">Why Businesses Choose Us</h2>
          
          <div className="max-w-[600px] mx-auto space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#6ab744] rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-[#222222] text-lg mb-1">Proven in Automotive</h3>
                <p className="text-[#555555] leading-relaxed">
                  Decades of experience serving dealerships, collision repair, and auto glass industries with trusted solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#6ab744] rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-[#222222] text-lg mb-1">Vertical Expansion</h3>
                <p className="text-[#555555] leading-relaxed">
                  Growing footprint in government services, healthcare, property management, and nonprofit sectors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#6ab744] rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-[#222222] text-lg mb-1">Software + Payments Synergy</h3>
                <p className="text-[#555555] leading-relaxed">
                  Unique advantage of combining industry-specific software with integrated payment processing for maximum efficiency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#6ab744] rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-[#222222] text-lg mb-1">Strong Foundation</h3>
                <p className="text-[#555555] leading-relaxed">
                  Backed by experienced investors and headquartered in Utah's thriving tech corridor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA SECTION */}
        <section className="px-6 md:px-8 py-16 bg-gradient-to-br from-[#F2F4F7] to-white text-center">
          <h2 className="text-[#123455] text-[32px] mb-4 max-w-[550px] mx-auto leading-tight">
            Ready to explore how vertical software + integrated payments can support your business?
          </h2>
          <p className="text-[#555555] text-lg mb-8 max-w-[500px] mx-auto">
            Let's schedule a discovery call to discuss your unique needs and how Convenient Brands can help you grow.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-[#6ab744] hover:bg-[#5aa038] text-white px-10 py-5 rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Schedule a discovery call <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-[#555555] text-sm mt-6">
            No commitment required • 30-minute consultation
          </p>
        </section>

        {/* FOOTER */}
        <footer className="px-6 md:px-8 py-8 bg-[#F2F4F7] border-t border-gray-200">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
            {/* Company Info */}
            <div>
              <h4 className="text-[#123455] mb-3 text-sm">Convenient Brands, LLC</h4>
              <div className="flex items-start gap-2 text-[#555555] text-xs mb-2">
                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>12884 S Frontrunner Blvd<br />Suite 220, Draper, UT 84020</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#123455] mb-3 text-sm">Contact</h4>
              <div className="flex items-center gap-2 text-[#555555] text-xs mb-2">
                <Phone className="w-3 h-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-[#555555] text-xs">
                <Mail className="w-3 h-3" />
                <span>hello@convenientbrands.com</span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-[#123455] mb-3 text-sm">Preferences</h4>
              <div className="flex flex-col gap-2 text-xs">
                <a href="#" className="text-[#6ab744] hover:underline">Update preferences</a>
                <a href="#" className="text-[#6ab744] hover:underline">Unsubscribe</a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-300 text-center">
            <p className="text-[#555555] text-xs">
              © 2025 Convenient Brands, LLC. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}