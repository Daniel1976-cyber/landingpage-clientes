import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ShoppingBag, 
  Smartphone, 
  MessageCircle, 
  XCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Package,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Tu Tienda Online</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://martin-sauri.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              Ver Demo
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Solución para Vendedores
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Cansado de grupos de WhatsApp y Facebook?
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Deja de cambiar foto por foto y buscar productos en listas interminables. Te presentamos una manera diferente de vender.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
              Quiero Mi Tienda
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <a href="https://martin-sauri.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Ver Ejemplo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            El problema que conoces muy bien
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Si eres vendedor, esto te suena familiar:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl text-red-900">Grupos de WhatsApp</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Subir foto por foto, responder mensajes individuales, confusión con pedidos, productos que ya no tienes y siguen apareciendo.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl text-red-900">Facebook Marketplace</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Publicar uno por uno, renovar constantemente, sin organización por categorías, clientes preguntando lo mismo una y otra vez.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl text-red-900">Listas Interminables</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Excel o notas con productos desorganizados, difícil de buscar, sin fotos, sin precios actualizados, un caos total.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl text-red-900">Pérdida de Tiempo</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Horas respondiendo mensajes, actualizando manualmente, buscando qué tienes y qué no, en lugar de vender y crecer.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            La solución: Tu Tienda Online Automatizada
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Mira cómo se ve una tienda online moderna:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl text-green-900">Productos Organizados</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Todos tus productos organizados por categorías. Fácil de encontrar, fácil de navegar, profesional.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl text-green-900">Inventario Automático</CardTitle>
                    <CardDescription className="text-base mt-2">
                       Los productos se muestran u ocultan automáticamente según tu disponibilidad actual. Sin más &ldquo;ya no tengo&rdquo;.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl text-green-900">Tasa de Cambio</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Actualiza automáticamente la tasa de cambio. Vendes en diferentes monedas sin complicaciones.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl text-green-900">Buscador Inteligente</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Tus clientes encuentran lo que buscan en segundos. No más preguntas repetitivas.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            ¿Qué necesitas tú?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Solo tus datos básicos. Nosotros hacemos todo el trabajo técnico.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Nombre de tu Negocio</CardTitle>
                <CardDescription>
                  El nombre que quieres que aparezca en tu tienda. Simple.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Dirección</CardTitle>
                <CardDescription>
                  Tu dirección física para envíos o retiros en tienda.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Email y WhatsApp</CardTitle>
                <CardDescription>
                  Tu correo y número de WhatsApp para que te contacten los clientes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Todo incluido en tu tienda
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Sin complicaciones, sin sorpresas
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Package className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Catálogo Completo</CardTitle>
                <CardDescription>
                  Todos tus productos con fotos, precios y descripciones.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Funciona en Celular</CardTitle>
                <CardDescription>
                  Tus clientes pueden comprar desde cualquier dispositivo.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle className="text-lg">Múltiples Monedas</CardTitle>
                <CardDescription>
                  Vende en la moneda que prefieras con tasa automática.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">WhatsApp Integrado</CardTitle>
                <CardDescription>
                  Los clientes te contactan directamente por WhatsApp.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Casos de Éxito
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tiendas que ya funcionan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estas tiendas ya están usando nuestra solución y vendiendo online
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Quiroga Express</CardTitle>
                    <CardDescription className="mt-2">
                      Tienda de productos variados con catálogo completo y gestión de inventario.
                    </CardDescription>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://quiroga-express-z6j9.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  Ver Tienda
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Nexo Market</CardTitle>
                    <CardDescription className="mt-2">
                      Marketplace con productos organizados por categorías y buscador inteligente.
                    </CardDescription>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://nexomarket-eight.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver Tienda
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Mercy Market</CardTitle>
                    <CardDescription className="mt-2">
                      Tienda con múltiples monedas y tasa de cambio automática.
                    </CardDescription>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://https://mercymarket-zfsl.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Ver Tienda
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Tienda Template</CardTitle>
                    <CardDescription className="mt-2">
                      La plantilla base que usamos para crear todas las tiendas personalizadas.
                    </CardDescription>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://martin-sauri.vercel.app"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                >
                  Ver Plantilla
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <Clock className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Te la montamos en 1-2 días
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Solo nos das tus datos (nombre, dirección, email, WhatsApp) y en 24-48 horas tienes tu tienda online funcionando.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 text-left">
            <h3 className="text-xl font-semibold text-white mb-4">El proceso es simple:</h3>
            <ol className="space-y-3 text-green-100">
              <li className="flex gap-3">
                <span className="font-bold text-white">1.</span>
                Nos contactas con tus datos básicos
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">2.</span>
                Nos envías la información de tus productos
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">3.</span>
                Configuramos tu tienda personalizada
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">4.</span>
                En 1-2 días, ¡tu tienda está lista!
              </li>
            </ol>
          </div>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8">
            <Phone className="h-5 w-5 mr-2" />
            Contactar Ahora
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingBag className="h-8 w-8 text-green-400" />
                  <span className="text-2xl font-bold">Tu Tienda Online</span>
                </div>
                <p className="text-gray-400">
                  Solución completa para vendedores que quieren dejar de perder tiempo en grupos de WhatsApp y Facebook.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    WhatsApp: +54 9 11 1234-5678
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email: contacto@tutienda.com
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="https://martin-sauri.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Ver Tienda Demo
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Daniel1976-cyber/tienda-template" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Para Desarrolladores
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2024 Tu Tienda Online. Desarrollado por Martin Saurí.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
