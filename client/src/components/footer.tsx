import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sky-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Research Project</h3>
            <p className="text-gray-600 text-sm mb-4">
              Advanced machine learning techniques for climate prediction and environmental science applications.
            </p>
            <p className="text-gray-600 text-sm">
              University Research Center<br />
              Department of Climate Science
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-sky-600 hover:text-sky-700">Research Overview</a></li>
              <li><a href="#" className="text-sky-600 hover:text-sky-700">Download Datasets</a></li>
              <li><a href="#" className="text-sky-600 hover:text-sky-700">View Publications</a></li>
              <li><a href="#" className="text-sky-600 hover:text-sky-700">Conference Materials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <Mail className="mr-2 text-sky-500" size={16} />
                research@university.edu
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-sky-500" size={16} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-sky-500" size={16} />
                123 Research Drive, University Campus
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sky-200 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 University Research Center. All rights reserved. •{" "}
            <a href="#" className="text-sky-600 hover:text-sky-700">Privacy Policy</a> •{" "}
            <a href="#" className="text-sky-600 hover:text-sky-700">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
