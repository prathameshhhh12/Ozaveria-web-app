import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#026456] text-[#FAF7C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#DCA818] font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#DCA818] font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Payments</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#DCA818] font-semibold mb-4">Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Return Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#DCA818] font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-[#DCA818] cursor-pointer" />
              <Twitter className="h-6 w-6 hover:text-[#DCA818] cursor-pointer" />
              <Instagram className="h-6 w-6 hover:text-[#DCA818] cursor-pointer" />
              <Youtube className="h-6 w-6 hover:text-[#DCA818] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-[#DCA818] mt-8 pt-8 text-center">
          <p>© 2024 Ozaveria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
