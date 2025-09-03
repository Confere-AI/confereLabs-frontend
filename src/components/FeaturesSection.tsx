import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { UserCheck, Eye, BarChart3, Smartphone, Zap, Shield, Clock, Users } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: UserCheck,
      title: 'Registro Automático de Presença',
      description: 'Detecta e registra automaticamente a presença através de reconhecimento facial avançado, eliminando a necessidade de chamadas manuais.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Eye,
      title: 'Detecção de Engajamento',
      description: 'Monitora o nível de atenção e engajamento dos participantes durante aulas e reuniões usando análise de comportamento.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: BarChart3,
      title: 'Relatórios de Frequência',
      description: 'Gera relatórios detalhados sobre frequência, pontualidade e padrões de presença com visualizações intuitivas.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Smartphone,
      title: 'Compatibilidade Mobile/Desktop',
      description: 'Funciona perfeitamente em qualquer dispositivo, desde smartphones até sistemas de desktop empresariais.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const additionalFeatures = [
    { icon: Zap, title: 'Processamento em Tempo Real', description: 'Análise instantânea com latência menor que 2 segundos' },
    { icon: Shield, title: 'Privacidade Garantida', description: 'Criptografia end-to-end e compliance com LGPD' },
    { icon: Clock, title: 'Histórico Completo', description: 'Armazenamento seguro de dados históricos para análises' },
    { icon: Users, title: 'Multi-usuário', description: 'Suporte para múltiplas turmas e organizações simultaneamente' }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Funcionalidades-Chave
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta para revolucionar o controle de presença e engajamento
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Recursos Adicionais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}