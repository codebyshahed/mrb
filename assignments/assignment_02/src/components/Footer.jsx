import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1.5">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              CS - Ticket System
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed ">
              CS - Ticket System provides a seamless and efficient way to manage
              customer support requests. Our platform ensures that every ticket
              is tracked, prioritized, and resolved promptly to deliver the best
              user experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Social Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1">
                  <Twitter className="w-3 h-3 text-black" />
                </div>
                <a href="#" className="hover:text-white transition-colors">
                  @CS - Ticket System
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1">
                  <Linkedin className="w-3 h-3 text-black" />
                </div>
                <a href="#" className="hover:text-white transition-colors">
                  @CS - Ticket System
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1">
                  <Facebook className="w-3 h-3 text-black" />
                </div>
                <a href="#" className="hover:text-white transition-colors">
                  @CS - Ticket System
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1">
                  <Mail className="w-3 h-3 text-black" />
                </div>
                <a href="#" className="hover:text-white transition-colors">
                  support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 CS - Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
