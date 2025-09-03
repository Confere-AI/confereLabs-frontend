import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Presença inteligente com{' '}
              <span className="text-blue-600">IA e Reconhecimento Facial</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolucione o controle de presença em ambientes acadêmicos e corporativos 
              com nossa solução baseada em inteligência artificial e visão computacional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#about" className="flex items-center gap-2">
                  Acesse o ConfereAI
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#docs" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Documentação
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-blue-600">99.5%</div>
                <div className="text-sm text-gray-600">Precisão</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{"<"}2s</div>
                <div className="text-sm text-gray-600">Tempo de Resposta</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">LGPD</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmFjaWFsJTIwcmVjb2duaXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgyNzQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="IA e Reconhecimento Facial"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Sistema Ativo</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm text-gray-600">Presença detectada</div>
              <div className="text-lg font-bold text-blue-600">42 pessoas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}