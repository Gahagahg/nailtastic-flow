import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, BarChart3, Smartphone, Clock, Heart, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-primary/10 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              BeautyBook
            </span>
          </div>
          <Button variant="hero" size="lg">
            Começar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                ✨ Transforme seu negócio
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Você quer viver
                </span>
                <br />
                do seu sonho?
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A gente tem o <strong>mapa</strong>. Aumente seu faturamento, organize seus agendamentos 
                e transforme sua paixão por beleza em um negócio de sucesso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Heart className="mr-2 h-5 w-5" />
                  Quero ganhar mais dinheiro
                </Button>
                <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
                  Ver demonstração
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="Workspace profissional de nail designer e lash designer" 
                className="relative z-10 rounded-3xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            Cansada de <span className="text-primary">perder clientes</span> por desorganização?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">Agendamentos confusos</h3>
              <p className="text-muted-foreground">Papel, WhatsApp, caderno... e no final sempre dá problema</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">Clientes esquecidos</h3>
              <p className="text-muted-foreground">Sem lembrete automático, faltam e você perde dinheiro</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">Sem controle financeiro</h3>
              <p className="text-muted-foreground">Não sabe quanto ganha, quanto deve receber</p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary">
            É hora de parar de trabalhar MAIS e começar a trabalhar MELHOR! 💎
          </h3>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Como funciona o BeautyBook?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema completo pensado especialmente para nail designers e lash designers 
              que querem profissionalizar e aumentar o faturamento
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <img 
              src={dashboardPreview} 
              alt="Preview do painel de agendamentos" 
              className="rounded-2xl shadow-elegant"
            />
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Agenda Online Inteligente</h3>
                  <p className="text-muted-foreground">
                    Suas clientes agendam sozinhas, escolhem horários disponíveis. 
                    Acabou o vai-e-vem no WhatsApp!
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lembretes Automáticos</h3>
                  <p className="text-muted-foreground">
                    Sistema envia lembretes por WhatsApp e email. Diminui faltas em 80%!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Controle Financeiro</h3>
                  <p className="text-muted-foreground">
                    Veja quanto ganha por mês, por serviço, acompanhe recebimentos. 
                    Tenha o controle nas suas mãos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Tudo que você precisa em <span className="text-primary">um só lugar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Agenda Inteligente</CardTitle>
                <CardDescription>
                  Agendamentos online 24h, horários personalizáveis, bloqueio automático
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <CardTitle>App Mobile</CardTitle>
                <CardDescription>
                  Acesse de qualquer lugar, receba notificações, gerencie na palma da mão
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Relatórios Completos</CardTitle>
                <CardDescription>
                  Faturamento, serviços mais procurados, horários de pico, tudo em gráficos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Gestão de Clientes</CardTitle>
                <CardDescription>
                  Histórico completo, preferências, aniversários, fidelização automática
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Marketing Automático</CardTitle>
                <CardDescription>
                  Campanhas de retorno, promoções personalizadas, mais vendas no piloto automático
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Suporte VIP</CardTitle>
                <CardDescription>
                  Suporte 100% em português, treinamento completo, você nunca fica sozinha
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-gradient-soft">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">
            O que nossas <span className="text-primary">parceiras</span> estão dizendo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Aumentei meu faturamento em 40% no primeiro mês! As clientes adoram agendar online 
                  e eu não perco mais tempo com WhatsApp."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full"></div>
                  <div className="text-left">
                    <div className="font-semibold">Marina Silva</div>
                    <div className="text-sm text-muted-foreground">Nail Designer - SP</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Melhor investimento que fiz! Agora tenho tempo para focar no que amo: 
                  fazer cílios lindos. O sistema cuida do resto."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full"></div>
                  <div className="text-left">
                    <div className="font-semibold">Ana Costa</div>
                    <div className="text-sm text-muted-foreground">Lash Designer - RJ</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Invista no seu <span className="bg-gradient-hero bg-clip-text text-transparent">futuro</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Por menos que uma unha de cliente, tenha o sistema completo
            </p>
          </div>

          <Card className="border-primary shadow-elegant max-w-md mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-hero"></div>
            <CardHeader className="text-center pb-2">
              <Badge className="bg-gradient-hero text-white w-fit mx-auto mb-4">
                🎉 OFERTA ESPECIAL
              </Badge>
              <CardTitle className="text-3xl">Plano Completo</CardTitle>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-5xl font-bold text-primary">R$ 49</span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">90</div>
                  <div className="text-sm text-muted-foreground">/mês</div>
                </div>
              </div>
              <p className="text-muted-foreground mt-2">
                Menos de R$ 1,70 por dia
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4 mb-8">
                {[
                  "Agenda online ilimitada",
                  "Lembretes automáticos por WhatsApp",
                  "Relatórios financeiros completos",
                  "App mobile incluído",
                  "Gestão completa de clientes",
                  "Marketing automático",
                  "Suporte VIP em português",
                  "Treinamento completo",
                  "Atualizações gratuitas",
                  "Backup automático dos dados"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="hero" size="lg" className="w-full text-lg py-6">
                <Heart className="mr-2 h-5 w-5" />
                Começar minha transformação
              </Button>
              
              <p className="text-sm text-center text-muted-foreground mt-4">
                ✅ 7 dias grátis • ✅ Cancele quando quiser • ✅ Suporte 24h
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronta para transformar seu negócio de beleza?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de profissionais que já aumentaram seu faturamento 
            e organizaram sua agenda com o BeautyBook
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              <Sparkles className="mr-2 h-5 w-5" />
              Começar 7 dias grátis
            </Button>
            <span className="text-sm opacity-75">
              Sem compromisso • Cancele quando quiser
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
            <div>
              <div className="text-3xl font-bold">+500</div>
              <div className="text-sm opacity-75">Profissionais atendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold">+40%</div>
              <div className="text-sm opacity-75">Aumento no faturamento</div>
            </div>
            <div>
              <div className="text-3xl font-bold">-80%</div>
              <div className="text-sm opacity-75">Redução de faltas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                BeautyBook
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 BeautyBook. Transformando negócios de beleza.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;