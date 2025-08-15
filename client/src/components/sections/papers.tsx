import { FileText, CheckCircle, Clock, ClipboardList, Download, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Papers() {
  const handleDownload = (paper: string) => {
    console.log(`Downloading ${paper}`);
  };

  const handleViewAbstract = (paper: string) => {
    console.log(`Viewing abstract for ${paper}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
          <FileText className="text-sky-500 mr-3" size={32} />
          Research Publications
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Academic papers, preprints, and technical reports from our climate prediction research. 
          All publications are available for download and academic reference.
        </p>
      </div>

      {/* Published Papers */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <CheckCircle className="text-green-500 mr-2" size={20} />
          Published Papers
        </h3>
        <div className="space-y-6">
          <Card className="shadow-sm border border-sky-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Deep Learning Approaches for Enhanced Climate Prediction: A Comprehensive Study
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Johnson, S., Chen, M., Rodriguez, E., & Thompson, K. (2024)
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    <strong>Journal of Climate Science and Technology</strong> • Volume 45, Issue 3 • DOI: 10.1234/jcst.2024.001
                  </p>
                  <p className="text-gray-700 mb-4">
                    This paper presents novel deep learning architectures specifically designed for climate prediction tasks, 
                    achieving significant improvements in prediction accuracy across multiple climate variables.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">Deep Learning</Badge>
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">Climate Modeling</Badge>
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">Neural Networks</Badge>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 lg:ml-6">
                  <Button
                    className="bg-sky-500 text-white hover:bg-sky-600"
                    onClick={() => handleDownload("deep-learning-climate-prediction.pdf")}
                  >
                    <Download className="mr-2" size={16} />
                    Download PDF
                  </Button>
                  <Button
                    variant="outline"
                    className="border-sky-500 text-sky-500 hover:bg-sky-50"
                    onClick={() => handleViewAbstract("deep-learning-climate-prediction")}
                  >
                    <Eye className="mr-2" size={16} />
                    View Abstract
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border border-sky-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Multi-Source Data Integration for Improved Weather Forecasting
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Chen, M., Johnson, S., & Rodriguez, E. (2024)
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    <strong>Atmospheric Research Letters</strong> • Volume 12, Issue 8 • DOI: 10.1234/arl.2024.045
                  </p>
                  <p className="text-gray-700 mb-4">
                    This study demonstrates effective methods for integrating satellite data, ground observations, 
                    and model outputs to enhance weather forecasting capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">Data Integration</Badge>
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">Weather Forecasting</Badge>
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">Satellite Data</Badge>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 lg:ml-6">
                  <Button
                    className="bg-sky-500 text-white hover:bg-sky-600"
                    onClick={() => handleDownload("multi-source-data-integration.pdf")}
                  >
                    <Download className="mr-2" size={16} />
                    Download PDF
                  </Button>
                  <Button
                    variant="outline"
                    className="border-sky-500 text-sky-500 hover:bg-sky-50"
                    onClick={() => handleViewAbstract("multi-source-data-integration")}
                  >
                    <Eye className="mr-2" size={16} />
                    View Abstract
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Preprints & Working Papers */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <Clock className="text-yellow-500 mr-2" size={20} />
          Preprints & Working Papers
        </h3>
        <div className="space-y-6">
          <Card className="shadow-sm border border-sky-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Transformer-Based Models for Long-Term Climate Projection
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Rodriguez, E., Johnson, S., & Chen, M. (2024)
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    <strong>arXiv preprint</strong> • arXiv:2024.12345 • Under review at Nature Climate Change
                  </p>
                  <p className="text-gray-700 mb-4">
                    Exploring the application of transformer architectures for long-term climate projections, 
                    with focus on capturing complex temporal dependencies in climate systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Transformers</Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Long-term Prediction</Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Climate Projection</Badge>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 lg:ml-6">
                  <Button
                    className="bg-yellow-500 text-white hover:bg-yellow-600"
                    onClick={() => handleDownload("transformer-climate-projection.pdf")}
                  >
                    <Download className="mr-2" size={16} />
                    Download PDF
                  </Button>
                  <Button
                    variant="outline"
                    className="border-yellow-500 text-yellow-500 hover:bg-yellow-50"
                    onClick={() => window.open("https://arxiv.org", "_blank")}
                  >
                    <FileText className="mr-2" size={16} />
                    View on arXiv
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technical Reports */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <ClipboardList className="text-blue-500 mr-2" size={20} />
          Technical Reports
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-sm border border-sky-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Model Architecture Documentation
              </h4>
              <p className="text-gray-600 mb-3">Technical Report TR-2024-001</p>
              <p className="text-gray-700 text-sm mb-4">
                Comprehensive documentation of the deep learning architectures developed for climate prediction tasks.
              </p>
              <Button
                className="w-full bg-sky-500 text-white hover:bg-sky-600"
                onClick={() => handleDownload("model-architecture-documentation.pdf")}
              >
                <Download className="mr-2" size={16} />
                Download Report
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm border border-sky-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Data Processing Pipeline Guide
              </h4>
              <p className="text-gray-600 mb-3">Technical Report TR-2024-002</p>
              <p className="text-gray-700 text-sm mb-4">
                Step-by-step guide for processing and cleaning climate data for machine learning applications.
              </p>
              <Button
                className="w-full bg-sky-500 text-white hover:bg-sky-600"
                onClick={() => handleDownload("data-processing-pipeline-guide.pdf")}
              >
                <Download className="mr-2" size={16} />
                Download Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
