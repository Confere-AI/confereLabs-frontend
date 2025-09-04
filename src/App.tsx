import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import UnderConstruction from './components/UnderConstruction';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProblemSolutionSection />
                <FeaturesSection />
                <UseCasesSection />
                <AboutSection />
                <DocumentationSection />
                <BlogSection />
                <ContactSection />
              </>
            } />
            <Route path="/under-construction" element={<UnderConstruction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}