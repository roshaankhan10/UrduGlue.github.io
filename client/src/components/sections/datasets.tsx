import { Database, Settings, Info, Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Datasets() {
  const primaryDatasets = [
    {
      name: "temperature_data_2020-2023.csv",
      description: "Temperature observations • 2.3 MB",
    },
    {
      name: "precipitation_data_global.csv", 
      description: "Rainfall measurements • 4.7 MB",
    },
    {
      name: "wind_patterns_regional.csv",
      description: "Wind speed and direction • 1.8 MB",
    },
  ];

  const processedDatasets = [
    {
      name: "training_dataset_cleaned.csv",
      description: "ML training data • 12.4 MB",
    },
    {
      name: "validation_dataset.csv",
      description: "Model validation data • 3.9 MB", 
    },
    {
      name: "model_predictions_output.csv",
      description: "Prediction results • 5.2 MB",
    },
  ];

  const handleDownload = (filename: string) => {
    // In a real implementation, this would trigger actual file downloads
    console.log(`Downloading ${filename}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
          <Database className="text-sky-500 mr-3" size={32} />
          Research Datasets
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Comprehensive datasets used in our climate prediction research, including processed data files, 
          raw observations, and model outputs. All datasets are available for download and research collaboration.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Primary Datasets */}
        <Card className="shadow-sm border border-sky-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="text-sky-500 mr-2" size={20} />
              Climate Observation Data
            </h3>
            <p className="text-gray-600 mb-4">
              Meteorological observations from weather stations across different regions.
            </p>
            
            <div className="space-y-3">
              {primaryDatasets.map((dataset, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="text-sky-600" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900">{dataset.name}</h4>
                      <p className="text-sm text-gray-600">{dataset.description}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-sky-500 text-white hover:bg-sky-600"
                    onClick={() => handleDownload(dataset.name)}
                  >
                    <Download className="mr-1" size={14} />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Processed Datasets */}
        <Card className="shadow-sm border border-sky-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="text-sky-500 mr-2" size={20} />
              Processed & Model Data
            </h3>
            <p className="text-gray-600 mb-4">
              Cleaned and preprocessed datasets ready for machine learning applications.
            </p>
            
            <div className="space-y-3">
              {processedDatasets.map((dataset, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="text-sky-600" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900">{dataset.name}</h4>
                      <p className="text-sm text-gray-600">{dataset.description}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-sky-500 text-white hover:bg-sky-600"
                    onClick={() => handleDownload(dataset.name)}
                  >
                    <Download className="mr-1" size={14} />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dataset Information */}
      <Card className="mt-8 shadow-sm border border-sky-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Info className="text-sky-500 mr-2" size={20} />
            Dataset Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Collection Period</h4>
              <p className="text-gray-600 mb-4">January 2020 - December 2023 (4 years of continuous observations)</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Geographic Coverage</h4>
              <p className="text-gray-600 mb-4">Global coverage with focus on North America and Europe</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Data Format</h4>
              <p className="text-gray-600">CSV files with standardized headers and missing value indicators</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Usage License</h4>
              <p className="text-gray-600 mb-4">Creative Commons Attribution 4.0 International (CC BY 4.0)</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Citation</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Johnson, S., Chen, M., & Rodriguez, E. (2024). Climate Prediction Dataset. University Research Center.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
              <p className="text-gray-600">research@university.edu for dataset inquiries</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
