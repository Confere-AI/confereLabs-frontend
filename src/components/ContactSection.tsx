import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MessageSquare, Github, Linkedin, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@confereai.com',
      description: 'Para dúvidas gerais e parcerias'
    },
    {
      icon: MessageSquare,
      title: 'Suporte Técnico',
      value: 'suporte@confereai.com',
      description: 'Ajuda com integração e implementação'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (11) 9999-9999',
      description: 'Atendimento comercial'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'São Paulo, SP',
      description: 'Brasil - Timezone UTC-3'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/confereai',
      description: 'Código aberto e documentação'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/confereai',
      description: 'Atualizações profissionais'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou quer uma demonstração? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                <p className="text-gray-600">
                  Preencha o formulário e entraremos em contato em até 24 horas.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa/Instituição
                  </label>
                  <Input placeholder="Nome da sua organização" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Selecione o assunto</option>
                    <option value="demo">Solicitar demonstração</option>
                    <option value="integration">Dúvidas de integração</option>
                    <option value="partnership">Parceria comercial</option>
                    <option value="support">Suporte técnico</option>
                    <option value="other">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    placeholder="Conte-nos mais sobre sua necessidade..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full">
                  Enviar Mensagem
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Seus dados estão protegidos pela nossa política de privacidade compatível com LGPD.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Outras Formas de Contato
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{method.title}</h4>
                            <p className="text-blue-600 font-medium">{method.value}</p>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Redes Sociais
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                              <Icon className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{social.name}</h4>
                              <p className="text-sm text-gray-600">{social.description}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                              Visitar
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Estatísticas de Atendimento
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24h</div>
                    <div className="text-sm text-gray-600">Tempo de resposta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">5 dias</div>
                    <div className="text-sm text-gray-600">Implementação média</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Suporte técnico</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}