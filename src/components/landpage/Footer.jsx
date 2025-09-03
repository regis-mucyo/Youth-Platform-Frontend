import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-3">elevateLink</h3>
            <p className="text-sm text-gray-400">
              Bridging Rwanda’s youth with the global diaspora for mentorship,
              growth, and real career opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#how-it-works">How it works</a></li>
              <li><a className="hover:text-white" href="#why-join-us">Why join us</a></li>
              <li><a className="hover:text-white" href="#trusted-by">Trusted by</a></li>
              <li><a className="hover:text-white" href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">Blog</a></li>
              <li><a className="hover:text-white" href="#">FAQ</a></li>
              <li><a className="hover:text-white" href="#">Support</a></li>
              <li><a className="hover:text-white" href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Get Started</h4>
            <p className="text-sm text-gray-400 mb-4">Become a mentee and start your journey today.</p>
            <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Sign up</a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} elevateLink. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
