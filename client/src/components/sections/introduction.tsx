import { Target, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Introduction() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-100 to-sky-200 rounded-2xl p-8 mb-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Machine Learning for Climate Prediction
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This comprehensive research project explores the application of advanced machine learning techniques 
            to improve climate prediction models. Our work combines deep learning architectures with traditional 
            meteorological data analysis to enhance prediction accuracy and provide valuable insights for climate science.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="text-sm text-gray-600">Duration</div>
              <div className="font-semibold">2023-2024</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="text-sm text-gray-600">Principal Investigator</div>
              <div className="font-semibold">Dr. Sarah Johnson</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="text-sm text-gray-600">Institution</div>
              <div className="font-semibold">University Research Center</div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="shadow-sm border border-sky-200">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="text-sky-500 mr-3" size={24} />
              Research Objectives
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-sky-500 mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Develop novel deep learning architectures for climate modeling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-sky-500 mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Integrate satellite data with traditional meteorological observations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-sky-500 mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Improve prediction accuracy by 15-20% over existing models</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-sky-500 mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Publish findings in top-tier academic journals</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border border-sky-200">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="text-sky-500 mr-3" size={24} />
              Key Findings
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-sky-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Model Performance</h4>
                <p className="text-gray-700 text-sm">
                  Achieved 18% improvement in prediction accuracy compared to baseline models
                </p>
              </div>
              <div className="p-4 bg-sky-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Data Integration</h4>
                <p className="text-gray-700 text-sm">
                  Successfully combined multi-source data including satellite imagery and ground observations
                </p>
              </div>
              <div className="p-4 bg-sky-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Computational Efficiency</h4>
                <p className="text-gray-700 text-sm">
                  Reduced training time by 40% through optimized architecture design
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Research Team */}
      <Card className="shadow-sm border border-sky-200 mb-8">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="text-sky-500 mr-3" size={24} />
            Research Team
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Users className="text-sky-600 text-2xl" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900">Dr. Sarah Johnson</h4>
              <p className="text-sm text-gray-600">Principal Investigator</p>
              <p className="text-xs text-gray-500 mt-1">Climate Science & ML</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Users className="text-sky-600 text-2xl" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900">Dr. Michael Chen</h4>
              <p className="text-sm text-gray-600">Co-Investigator</p>
              <p className="text-xs text-gray-500 mt-1">Deep Learning Architect</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Users className="text-sky-600 text-2xl" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
              <p className="text-sm text-gray-600">PhD Candidate</p>
              <p className="text-xs text-gray-500 mt-1">Data Analysis & Visualization</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
