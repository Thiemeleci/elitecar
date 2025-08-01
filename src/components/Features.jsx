import React from 'react'
import { Shield, Clock4, CreditCard, MapPin, Headphones, FileBadge, Users, Zap  } from 'lucide-react';

const features = [
  {
    title: 'Seguro toal',
    description: 'Todos os nossos veículos vêm com cobertura de seguro abrangente para sua tranquilidade.',
    icon: <Shield className='w-8 h-8' />,
  },
  {
    title: 'Suporte 24/7',
    description: 'Suporte ao cliente e assistência na estrada 24 horas por dia, sempre que você precisar.',
    icon: <Clock4 className='w-8 h-8' />,
  },
  {
    title: 'Pagamento facilitado',
    description: 'Pagamentos on-line seguros com várias opções de pagamento e confirmação instantânea.',
    icon: <CreditCard className='w-8 h-8' />,
  },
  {
    title: 'Diversos locais',
    description: 'Retire e entregue em qualquer um dos nossos mais de 50 locais convenientes em todo o país.',
    icon: <MapPin className='w-8 h-8' />,
  },
  {
    title: 'Suporte especializado',
    description: 'Nossa equipe dedicada está aqui para ajudá-lo a encontrar o veículo perfeito para suas necessidades.',
    icon: <Headphones className='w-8 h-8' />,
  },
  {
    title: 'Qualidade Premium',
    description: 'Todos os veículos passam por manutenção regular e atendem aos nossos padrões de alta qualidade.',
    icon: <FileBadge className='w-8 h-8' />,
  },
  {
    title: 'Com a confiança de milhares de pessoas',
    description: 'Junte-se a mais de 100.000 clientes satisfeitos que confiam em nós para suas necessidades de transporte.',
    icon: <Users className='w-8 h-8' />,
  },
  {
    title: 'Reserva imediata',
    description: 'Reserve seu carro com apenas alguns cliques e receba uma confirmação instantânea por e-mail.',
    icon: <Zap className='w-8 h-8' />,
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-28">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="sm:text-4xl text-3xl font-bold text-gray-800 mb-4 hero-reveal">Por que escolher a EliteCar?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg hero-reveal">
          Temos o compromisso de oferecer a melhor experiência de aluguel de carros por meio de nossos serviços premium e da abordagem que prioriza o cliente.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col bg-white items-center text-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transform hover:-translate-y-2 transition duration-300 reveal-y"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 mb-4 text-white">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features