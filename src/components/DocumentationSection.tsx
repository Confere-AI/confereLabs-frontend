import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  BookOpen, 
  Code, 
  Video, 
  MessageCircleQuestion, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ArrowRight,
  Download,
  ExternalLink
} from 'lucide-react';

export function DocumentationSection() {
  const docSections = [
    {
      icon: BookOpen,
      title: 'Guia Rápido',
      description: 'Primeiros passos com o ConfereAI - instalação e configuração básica',
      type: 'Getting Started',
      color: 'blue'
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Documentação completa dos endpoints REST e webhooks disponíveis',
      type: 'Technical',

      color: 'green'
    },
    {
      icon: Video,
      title: 'Tutoriais em Vídeo',
      description: 'Passo a passo visual para integração e uso avançado',
      type: 'Tutorial',

      color: 'purple'
    }
  ];

  const roadmapPhases = [
    {
      phase: 'MVP',
      title: 'Reconhecimento Facial Básico',
      status: 'completed',
      description: 'Sistema core de detecção e registro de presença',
      features: ['Reconhecimento facial', 'Registro automático', 'API básica'],
      quarter: 'Q1 2024'
    },
    {
      phase: 'v1.1',
      title: 'Dashboards e Relatórios',
      status: 'completed',
      description: 'Interface administrativa com visualizações',
      features: ['Dashboard web', 'Relatórios PDF', 'Filtros avançados'],
      quarter: 'Q2 2024'
    },
    {
      phase: 'v1.2',
      title: 'Análise de Engajamento',
      status: 'in-progress',
      description: 'Métricas comportamentais e de atenção',
      features: ['Análise de atenção', 'Métricas comportamentais', 'Alertas inteligentes'],
      quarter: 'Q3 2024'
    },
    {
      phase: 'v2.0',
      title: 'Aplicativo Mobile',
      status: 'planned',
      description: 'App nativo para iOS e Android',
      features: ['App nativo', 'Notificações push', 'Modo offline'],
      quarter: 'Q4 2024'
    },
    {
      phase: 'v2.1',
      title: 'Microsserviços',
      status: 'planned',
      description: 'Arquitetura escalável e distribuída',
      features: ['Microsserviços', 'Auto-scaling', 'Multi-tenant'],
      quarter: 'Q1 2025'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'planned':
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Concluído</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800">Em Desenvolvimento</Badge>;
      case 'planned':
        return <Badge variant="secondary">Planejado</Badge>;
      default:
        return null;
    }
  };

  return (
    <section id="docs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Documentação & Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para integrar e acompanhar a evolução do ConfereAI
          </p>
        </div>

        {/* Documentation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {docSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Badge variant="outline">{section.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Access */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Acesso Rápido</h3>
            <p className="text-gray-600">Principais recursos para desenvolvedores</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download SDK
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              API Playground
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Exemplos de Código
            </Button>
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Roadmap de Desenvolvimento
          </h3>
          <div className="space-y-6">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(phase.status)}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900">{phase.title}</h4>
                          <Badge variant="outline">{phase.phase}</Badge>
                        </div>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(phase.status)}
                      <div className="text-sm text-gray-500 mt-1">{phase.quarter}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {phase.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="flex items-center gap-2 mx-auto">
            Explore a Documentação Completa
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}