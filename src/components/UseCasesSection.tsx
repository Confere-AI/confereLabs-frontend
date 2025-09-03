import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Building2, Calendar, CheckCircle } from 'lucide-react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: GraduationCap,
      title: 'Educação',
      subtitle: 'Faculdades, Escolas e Cursos',
      image: 'https://images.unsplash.com/photo-1723987135977-ae935608939e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgyNzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: [
        'Automatizar chamada em aulas presenciais',
        'Relatórios de frequência para professores',
        'Análise de engajamento em tempo real',
        'Compliance com requisitos acadêmicos'
      ],
      metrics: [
        { label: 'Tempo economizado', value: '85%' },
        { label: 'Precisão', value: '99.5%' },
        { label: 'Satisfação docente', value: '94%' }
      ],
      color: 'blue'
    },
    {
      icon: Building2,
      title: 'Corporativo',
      subtitle: 'Empresas e Treinamentos',
      image: 'https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1NjgyNzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: [
        'Validar presença em treinamentos obrigatórios',
        'Controle de acesso a reuniões importantes',
        'Métricas de participação em eventos',
        'Integração com sistemas de RH'
      ],
      metrics: [
        { label: 'Redução de custos', value: '67%' },
        { label: 'Compliance', value: '100%' },
        { label: 'Produtividade', value: '+42%' }
      ],
      color: 'green'
    },
    {
      icon: Calendar,
      title: 'Eventos',
      subtitle: 'Workshops e Conferências',
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc1NjcyMzUyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: [
        'Autenticação rápida de participantes',
        'Controle de capacidade em tempo real',
        'Relatórios pós-evento automatizados',
        'Experiência fluida para participantes'
      ],
      metrics: [
        { label: 'Check-in speed', value: '3x mais rápido' },
        { label: 'Satisfação', value: '96%' },
        { label: 'Eficiência', value: '+78%' }
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        icon: 'text-blue-600',
        bg: 'bg-blue-50',
        badge: 'bg-blue-100 text-blue-800',
        border: 'border-blue-200'
      },
      green: {
        icon: 'text-green-600',
        bg: 'bg-green-50',
        badge: 'bg-green-100 text-green-800',
        border: 'border-green-200'
      },
      purple: {
        icon: 'text-purple-600',
        bg: 'bg-purple-50',
        badge: 'bg-purple-100 text-purple-800',
        border: 'border-purple-200'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Casos de Uso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções adaptadas para diferentes ambientes e necessidades
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const colors = getColorClasses(useCase.color);
            
            return (
              <Card key={index} className={`${colors.border} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${colors.icon}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                          <p className="text-gray-600">{useCase.subtitle}</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-4">Principais Benefícios:</h4>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-4">Métricas de Impacto:</h4>
                        <div className="flex flex-wrap gap-2">
                          {useCase.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="secondary" className={colors.badge}>
                              {metric.label}: {metric.value}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  {/* Image */}
                  <div className="lg:p-8 p-4">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}