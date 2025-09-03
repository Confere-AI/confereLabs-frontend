import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, ArrowRight, User, TrendingUp } from 'lucide-react';

export function BlogSection() {
  const posts = [
    {
      title: 'Como surgiu a ideia do ConfereAI?',
      excerpt: 'Como pensamos no nome, na ideia inicial e nos primeiros passos do projeto.',
      image: 'https://images.unsplash.com/photo-1723987135977-ae935608939e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgyNzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Ideia',
      date: '15 Jan 2024',
      readTime: '8 min',
      author: 'Equipe ConfereAI',
      featured: true
    },
    {
      title: 'LGPD e Reconhecimento Facial: Como Garantir Compliance',
      excerpt: 'Guia completo sobre como implementar sistemas de reconhecimento facial respeitando a Lei Geral de Proteção de Dados.',
      image: 'https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmFjaWFsJTIwcmVjb2duaXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgyNzQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Privacidade',
      date: '08 Jan 2024',
      readTime: '12 min',
      author: 'Dr. Ana Silva',
      featured: false
    },
    {
      title: 'Tutorial: Integrando ConfereAI em 10 Minutos',
      excerpt: 'Passo a passo prático para implementar nossa API em sua aplicação existente com exemplos de código.',
      image: 'https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1NjgyNzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Tutorial',
      date: '22 Dez 2023',
      readTime: '15 min',
      author: 'João Santos',
      featured: false
    },
    {
      title: 'Análise de Engajamento: Métricas que Importam',
      excerpt: 'Descubra como usar dados de atenção e comportamento para melhorar a experiência em aulas e reuniões.',
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc1NjcyMzUyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Analytics',
      date: '18 Dez 2023',
      readTime: '10 min',
      author: 'Maria Costa',
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Educação': 'bg-blue-100 text-blue-800',
      'Privacidade': 'bg-green-100 text-green-800',
      'Tutorial': 'bg-purple-100 text-purple-800',
      'Analytics': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artigos e insights sobre IA, reconhecimento facial e inovação
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-12 shadow-xl border-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Destaque
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="flex items-center gap-2">
                    <a href="https://medium.com/@joaopedrooliveira030506/confereai-revolutionizing-attendance-tracking-with-facial-recognition-3e094cd4527f" target="_blank" rel="noopener noreferrer">Ler Artigo</a>
                    
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getCategoryColor(post.category)} variant="secondary">
                    {post.category}
                  </Badge>
                </div>
                <h3 className="font-bold text-gray-900 leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Ler Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}