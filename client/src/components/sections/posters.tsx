import { Image, CheckCircle, MonitorSpeaker, Info, Download, Eye, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Posters() {
  const conferencePosters = [
    {
      title: "Deep Learning for Climate Prediction",
      conference: "International Climate Science Conference 2024",
      presenter: "Dr. Sarah Johnson",
      location: "Boston, MA",
      icon: "chart-line",
      bgColor: "from-sky-100 to-sky-200",
      iconColor: "text-sky-500"
    },
    {
      title: "Multi-Source Data Integration",
      conference: "Machine Learning in Meteorology Workshop 2024",
      presenter: "Dr. Michael Chen",
      location: "San Francisco, CA",
      icon: "project-diagram",
      bgColor: "from-blue-100 to-blue-200",
      iconColor: "text-blue-500"
    },
    {
      title: "Transformer Models for Climate",
      conference: "AI for Earth Science Symposium 2024",
      presenter: "Emily Rodriguez",
      location: "Seattle, WA",
      icon: "brain",
      bgColor: "from-purple-100 to-purple-200",
      iconColor: "text-purple-500"
    }
  ];

  const presentationSlides = [
    {
      title: "Research Overview - Climate Prediction Project",
      event: "Keynote presentation at the International Climate Science Conference 2024",
      details: "45 slides • Dr. Sarah Johnson • March 15, 2024",
      bgColor: "bg-sky-100",
      iconColor: "text-sky-600"
    },
    {
      title: "Deep Learning Methods in Climate Science",
      event: "Workshop presentation at the Machine Learning in Meteorology Conference",
      details: "32 slides • Dr. Michael Chen • February 8, 2024",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  const handleDownload = (item: string) => {
    console.log(`Downloading ${item}`);
  };

  const handlePreview = (item: string) => {
    console.log(`Previewing ${item}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
          <Image className="text-sky-500 mr-3" size={32} />
          Conference Posters & Presentations
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Visual presentations and posters from conferences, workshops, and seminars. 
          High-resolution versions available for download and academic use.
        </p>
      </div>

      {/* Conference Posters */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <CheckCircle className="text-green-500 mr-2" size={20} />
          Conference Posters
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {conferencePosters.map((poster, index) => (
            <Card key={index} className="shadow-sm border border-sky-200 hover:shadow-md transition-shadow overflow-hidden">
              <div className={`aspect-[3/4] bg-gradient-to-br ${poster.bgColor} flex items-center justify-center`}>
                <div className="text-center p-6">
                  <div className={`${poster.iconColor} text-4xl mb-4 flex justify-center`}>
                    <Image size={48} />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {poster.title.includes("Climate") ? "Climate Prediction Models" : 
                     poster.title.includes("Data") ? "Data Integration" : "Neural Networks"}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {poster.title.includes("Climate") ? "Performance Analysis & Results" :
                     poster.title.includes("Data") ? "Methodology & Framework" : "Architecture & Performance"}
                  </p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{poster.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{poster.conference}</p>
                <p className="text-xs text-gray-500 mb-3">
                  Presented by {poster.presenter} • {poster.location}
                </p>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-sky-500 text-white hover:bg-sky-600"
                    onClick={() => handleDownload(`${poster.title}.pdf`)}
                  >
                    <Download className="mr-1" size={14} />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-sky-500 text-sky-500 hover:bg-sky-50"
                    onClick={() => handlePreview(poster.title)}
                  >
                    <Eye size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Presentation Slides */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <MonitorSpeaker className="text-blue-500 mr-2" size={20} />
          Presentation Slides
        </h3>
        <div className="space-y-4">
          {presentationSlides.map((slides, index) => (
            <Card key={index} className="shadow-sm border border-sky-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`w-16 h-12 ${slides.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FileText className={slides.iconColor} size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{slides.title}</h4>
                      <p className="text-gray-600 mb-2">{slides.event}</p>
                      <p className="text-sm text-gray-500">{slides.details}</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 lg:ml-6 mt-4 lg:mt-0">
                    <Button
                      className="bg-sky-500 text-white hover:bg-sky-600"
                      onClick={() => handleDownload(`${slides.title}.pptx`)}
                    >
                      <Download className="mr-2" size={16} />
                      Download PPT
                    </Button>
                    <Button
                      variant="outline"
                      className="border-sky-500 text-sky-500 hover:bg-sky-50"
                      onClick={() => handlePreview(slides.title)}
                    >
                      <Eye className="mr-2" size={16} />
                      View Online
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <Card className="shadow-sm border border-sky-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Info className="text-sky-500 mr-2" size={20} />
            Usage Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">File Formats</h4>
              <ul className="text-gray-600 text-sm space-y-1 mb-4">
                <li>• Posters: High-resolution PDF (300 DPI)</li>
                <li>• Presentations: PowerPoint (.pptx) and PDF</li>
                <li>• Images: PNG format for web viewing</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-2">License Information</h4>
              <p className="text-gray-600 text-sm">
                All materials licensed under Creative Commons Attribution 4.0 International (CC BY 4.0)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Citation Requirements</h4>
              <p className="text-gray-600 text-sm mb-4">
                Please cite the corresponding paper or include appropriate attribution when using these materials.
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">Contact for Permissions</h4>
              <p className="text-gray-600 text-sm">
                For commercial use or special permissions, contact research@university.edu
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
