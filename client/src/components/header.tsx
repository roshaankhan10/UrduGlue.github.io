import { useState } from "react";
import { GraduationCap, Home, Database, FileText, Image, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "introduction", label: "Introduction", icon: Home },
    { id: "datasets", label: "Datasets", icon: Database },
    { id: "papers", label: "Papers", icon: FileText },
    { id: "posters", label: "Posters", icon: Image },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-sky-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white text-lg" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Research Project Dashboard</h1>
              <p className="text-sm text-gray-600">Academic Research Initiative</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "bg-sky-500 text-white hover:bg-sky-600"
                      : "hover:bg-sky-100 text-gray-700"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <Icon className="mr-2" size={16} />
                  {tab.label}
                </Button>
              );
            })}
          </nav>
          
          <Button
            variant="ghost"
            className="md:hidden p-2 rounded-lg hover:bg-sky-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="text-xl" size={24} />
          </Button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 justify-start ${
                    activeTab === tab.id
                      ? "bg-sky-500 text-white"
                      : "hover:bg-sky-100 text-gray-700"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <Icon className="mr-2" size={16} />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
