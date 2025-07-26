import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, BarChart3, Smartphone, Clock, Heart, Star, Sparkles, Shield, TrendingUp, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold text-foreground">
              CLIVY
            </span>
          </div>
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
            Comece agora por R$1,70/dia
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                Organize sua agenda.
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Cresça seu estúdio.
                </span>
                <br />
                Lucre mais.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Com o CLIVY, você para de perder clientes, agenda e dinheiro. 
                Tudo que você precisa para organizar sua rotina está em um só lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Comece agora por R$1,70/dia
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground justify-center lg:justify-start">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sem contrato
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Cancele quando quiser
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src={dashboardPreview} 
                alt="Interface do CLIVY no celular e desktop" 
                className="relative z-10 rounded-3xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Antes do CLIVY */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-red-600">Antes do CLIVY:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <span className="text-muted-foreground">Marca cliente no WhatsApp e ela não aparece</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <span className="text-muted-foreground">Você esquece horários ou anota errado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <span className="text-muted-foreground">Perde tempo respondendo e organizando tudo na mão</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <span className="text-muted-foreground">Fica sem saber quanto lucrou no mês</span>
                </li>
              </ul>
            </div>

            {/* Com o CLIVY */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">Com o CLIVY:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Agenda online com confirmação automática</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Lembrete por WhatsApp para o cliente não esquecer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">App simples com tudo em um só lugar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Relatórios de lucro, gastos e metas mensais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            O que nossas <span className="bg-gradient-hero bg-clip-text text-transparent">parceiras</span> estão dizendo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 shadow-soft">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic text-muted-foreground">
                  "Antes do Clivy era tudo no caderninho e na sorte. Agora tenho agenda cheia e sem dor de cabeça."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full"></div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Luiza Silva</div>
                    <div className="text-sm text-muted-foreground">Nail Designer - SP</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-soft">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic text-muted-foreground">
                  "Finalmente entendi quanto estou ganhando e o que preciso fazer para crescer."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full"></div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Camila Costa</div>
                    <div className="text-sm text-muted-foreground">Lash Designer - RJ</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              💎 <span className="bg-gradient-hero bg-clip-text text-transparent">Plano Completo</span> – Tudo incluso
            </h2>
            <p className="text-xl text-muted-foreground">
              Menos de R$ 1,70 por dia!
            </p>
          </div>

          <Card className="border-primary/30 shadow-elegant max-w-lg mx-auto relative overflow-hidden bg-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-hero"></div>
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">R$ 49</span>
                <div className="text-left">
                  <div className="text-lg text-muted-foreground">,90</div>
                  <div className="text-lg text-muted-foreground">/mês</div>
                </div>
              </div>
              <p className="text-muted-foreground mt-2 text-lg">
                Menos de R$ 1,70 por dia
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Agenda online ilimitada",
                  "App para celular",
                  "Lembretes automáticos por WhatsApp",
                  "Relatórios financeiros",
                  "Campanhas de marketing",
                  "Suporte via WhatsApp",
                  "Backup automático",
                  "Sem contrato"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="w-full text-lg py-6 bg-primary hover:bg-primary/90 mb-4">
                <TrendingUp className="mr-2 h-5 w-5" />
                👉 Comece agora por R$1,70/dia
              </Button>
              
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                Sem contrato, sem taxa escondida, sem enrolação
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Você</span> sem risco nenhum
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Use o CLIVY por 7 dias. Se não amar, é só cancelar.
          </p>
          <p className="text-lg font-semibold text-foreground mb-8">
            Sem contrato, sem taxa escondida, sem enrolação.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
            <p className="text-2xl font-bold text-foreground">
              ➡️ Quanto mais você espera, mais horários você perde.
            </p>
          </div>

          <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90">
            <TrendingUp className="mr-2 h-5 w-5" />
            Começar agora por R$1,70/dia
          </Button>

          <div className="grid md:grid-cols-3 gap-8 text-center mt-16">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+500</div>
              <div className="text-sm text-muted-foreground">Profissionais atendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+40%</div>
              <div className="text-sm text-muted-foreground">Aumento no faturamento</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">-80%</div>
              <div className="text-sm text-muted-foreground">Redução de faltas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold text-foreground">
                CLIVY
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 CLIVY. Transformando negócios de beleza.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;