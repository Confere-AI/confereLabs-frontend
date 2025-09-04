import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { UseCasesSection } from './components/UseCasesSection';
import { AboutSection } from './components/AboutSection';
import { DocumentationSection } from './components/DocumentationSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Problem & Solution */}
        <ProblemSolutionSection />
        
        {/* Features */}
        <FeaturesSection />
        
        {/* Use Cases */}
        <UseCasesSection />
        
        {/* About */}
        <AboutSection />
        
        {/* Documentation & Roadmap */}
        <DocumentationSection />
        
        {/* Blog */}
        <BlogSection />
        
        {/* Contact */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}