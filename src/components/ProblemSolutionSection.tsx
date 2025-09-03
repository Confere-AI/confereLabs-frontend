import { Card, CardContent } from './ui/card';
import { CheckCircle, X, Clock, Users, BarChart3, Shield } from 'lucide-react';

export function ProblemSolutionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Do Problema à Solução
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos os desafios tradicionais de controle de presença em uma experiência inteligente e eficiente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              Métodos Tradicionais
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Chamada Manual Demorada</h4>
                  <p className="text-gray-600">Perda de tempo valioso em cada aula ou reunião</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Prone a Erros</h4>
                  <p className="text-gray-600">Possibilidade de fraudes e registros incorretos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Sem Métricas</h4>
                  <p className="text-gray-600">Dificuldade para analisar padrões de engajamento</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Processo Manual</h4>
                  <p className="text-gray-600">Dependência de intervenção humana constante</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Solução ConfereAI
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <Clock className="w-8 h-8 text-green-600 mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Automático</h4>
                  <p className="text-sm text-gray-600">Registro instantâneo via reconhecimento facial</p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Preciso</h4>
                  <p className="text-sm text-gray-600">99.5% de precisão na identificação</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200">
                <CardContent className="p-4">
                  <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Inteligente</h4>
                  <p className="text-sm text-gray-600">Análise de engajamento e relatórios</p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200">
                <CardContent className="p-4">
                  <Shield className="w-8 h-8 text-orange-600 mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Seguro</h4>
                  <p className="text-sm text-gray-600">Compliant com LGPD e privacidade</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}