import React from 'react'
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, Phone, Mail, MapPin  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <Link to='/' className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">EliteCar</span>
          </Link>
          <p className="leading-relaxed my-4">
            Seu parceiro confiável para aluguel de carros premium. Experimente a liberdade da estrada com nossos veículos de qualidade e serviço excepcional.
          </p>
          <div className="flex gap-4 mt-2">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Links rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Início</a></li>
            <li><a href="#" className="hover:underline">Nossos carros</a></li>
            <li><a href="#" className="hover:underline">Sobre nós</a></li>
            <li><a href="#" className="hover:underline">Contato</a></li>
            <li><a href="#" className="hover:underline">Termos e Condições</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Serviços</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Carros econômicos</a></li>
            <li><a href="#" className="hover:underline">Veículos de luxo</a></li>
            <li><a href="#" className="hover:underline">SUVs e Trucks</a></li>
            <li><a href="#" className="hover:underline">Carros elétricos</a></li>
            <li><a href="#" className="hover:underline">Aluguel de longo prazo</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Nossos contatos</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone className="text-blue-400 w-5 h-5" /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-blue-400 w-5 h-5" /> info@elitecar.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-blue-400 w-5 h-5" /> 123 Main St, City, State 12345
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} EliteCar. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:underline">Política de privacidade</a>
          <a href="#" className="hover:underline">Termos de serviço</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer