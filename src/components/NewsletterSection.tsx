import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail, Sparkles } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="relative bg-gradient-to-br from-secondary via-primary to-accent py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/40">
                    <Mail className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl font-black text-white">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-white/90 text-lg">
                  Recibirás nuestras mejores ofertas y lanzamientos exclusivos pronto.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-2 border border-white/20">
                    <Sparkles className="h-4 w-4 text-yellow-300" />
                    <span className="text-white text-sm font-medium">Ofertas Exclusivas</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-white">
                    ¿Quieres descuentos exclusivos?
                  </h3>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Suscríbete a nuestro newsletter y recibe ofertas especiales, nuevos lanzamientos y contenido exclusivo
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 h-14 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    size="lg"
                    className="h-14 px-8 bg-white text-primary hover:bg-white/90 font-bold text-lg shadow-xl sm:w-auto"
                  >
                    {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribirme'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-white bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};