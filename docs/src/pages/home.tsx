import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Introduction from "@/components/sections/introduction";
import Datasets from "@/components/sections/datasets";
import Papers from "@/components/sections/papers";
import Posters from "@/components/sections/posters";

export default function Home() {
  const [activeTab, setActiveTab] = useState("introduction");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "introduction":
        return <Introduction />;
      case "datasets":
        return <Datasets />;
      case "papers":
        return <Papers />;
      case "posters":
        return <Posters />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 text-gray-800 font-calibri">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-6xl mx-auto px-6 py-8">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}
