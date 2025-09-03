import { Bot, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'Funcionalidades', href: '#features' },
      { name: 'Casos de Uso', href: '#cases' },
      { name: 'Preços', href: '#pricing' },
      { name: 'Roadmap', href: '#docs' }
    ],
    resources: [
      { name: 'Documentação', href: '#docs' },
      { name: 'API Reference', href: '#docs' },
      { name: 'Tutoriais', href: '#blog' },
      { name: 'FAQ', href: '#docs' }
    ],
    company: [
      { name: 'Sobre', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contato', href: '#contact' },
      { name: 'Privacidade', href: '/privacy' }
    ],
    legal: [
      { name: 'Termos de Uso', href: '/terms' },
      { name: 'Política de Privacidade', href: '/privacy' },
      { name: 'LGPD', href: '/lgpd' },
      { name: 'Cookies', href: '/cookies' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">ConfereAI</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Revolucionando o controle de presença com inteligência artificial 
                e reconhecimento facial. Solução completa para instituições 
                educacionais e empresas modernas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/confereai"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/confereai"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contato@confereai.com"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold mb-4">Produto</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-bold mb-4">Recursos</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">
                Mantenha-se Atualizado
              </h3>
              <p className="text-gray-400">
                Receba as últimas novidades sobre IA e reconhecimento facial
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto md:min-w-[400px]">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="default">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>© 2024 ConfereAI. Todos os direitos reservados.</span>
              <span className="hidden md:block">•</span>
              <span>Desenvolvido com ❤️ para o futuro da educação</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Todos os sistemas operacionais</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}