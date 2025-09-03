import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Target, Users, Shield, Lightbulb, Award, Code2 } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Democratizar o acesso a tecnologias de IA para automatizar processos educacionais e corporativos.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Combinamos visão computacional, machine learning e design UX para criar soluções intuitivas.'
    },
    {
      icon: Shield,
      title: 'Privacidade',
      description: 'Compromisso total com LGPD, criptografia de dados e transparência no uso de algoritmos.'
    }
  ];

  const differentials = [
    'Algoritmos proprietários de reconhecimento facial',
    'Análise de engajamento em tempo real',
    'Interface intuitiva e responsiva',
    'Compliance total com LGPD',
    'Arquitetura escalável em microsserviços',
    'Integração simples via APIs REST'
  ];

  const technologies = [
    { name: 'Flutter', stack: 'Mobile', color: 'bg-purple-100 text-green-800' },
    { name: 'React', stack: 'Frontend', color: 'bg-green-100 text-purple-800' },
    { name: 'Tailwind', stack: 'Frontend', color: 'bg-green-100 text-purple-800' },
    { name: 'Node.js', stack: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'Express', stack: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'PostgreSQL', stack: 'Database', color: 'bg-blue-100 text-blue-800' },
    { name: 'MediaPipe', stack: 'AI/ML', color: 'bg-purple-100 text-purple-800' },
    { name: 'TensorFlow', stack: 'AI/ML', color: 'bg-purple-100 text-purple-800' },
    { name: 'LangChain', stack: 'AI/ML', color: 'bg-purple-100 text-purple-800' },
    { name: 'Gemkit', stack: 'AI/ML', color: 'bg-purple-100 text-purple-800' }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sobre o ConfereAI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um projeto inovador nascido da necessidade de modernizar o controle de presença com inteligência artificial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa História</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                O ConfereAI nasceu de uma observação simples: quantas horas são perdidas diariamente 
                com chamadas manuais em salas de aula e reuniões corporativas? Nossa equipe de 
                desenvolvedores e pesquisadores decidiu atacar esse problema usando o que há de 
                mais moderno em inteligência artificial.
              </p>
              <p>
                Desenvolvido como projeto acadêmico, o ConfereAI rapidamente evoluiu para uma 
                solução robusta que combina reconhecimento facial de alta precisão com análise 
                comportamental, tudo isso mantendo os mais altos padrões de privacidade e segurança.
              </p>
              <p>
                Hoje, nossa missão é democratizar o acesso a esta tecnologia, tornando-a acessível 
                para instituições de ensino e empresas de todos os tamanhos.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossos Valores</h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Differentials */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Diferenciais do ConfereAI
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Características únicas que nos tornam a melhor escolha para controle inteligente de presença
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{differential}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team & Tech */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Nossa Equipe</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Profissionais dedicados à inovação em IA
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">João Pedro</h4>
                    <p className="text-blue-600 text-sm">Backend Developer & Founder</p>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    Backend/ML
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">João Guilherme</h4>
                    <p className="text-blue-600 text-sm">Frontend Developer</p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Frontend
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Lucas Moreira</h4>
                    <p className="text-blue-600 text-sm">AI Developer</p>
                  </div>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                    AI/ML
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Melky</h4>
                    <p className="text-blue-600 text-sm">Backend Developer</p>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    Backend
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Glauckyon</h4>
                    <p className="text-blue-600 text-sm">AI Developer</p>
                  </div>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                    AI/ML
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Code2 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Tecnologias</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Stack tecnológico utilizado no projeto
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <Badge variant="secondary" className={tech.color}>
                      {tech.name}
                    </Badge>
                    <span className="text-xs text-gray-500">{tech.stack}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}