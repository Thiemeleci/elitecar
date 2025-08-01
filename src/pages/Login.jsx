import React, { useEffect } from 'react'
import { Facebook, Mail, Lock, Instagram, Car } from 'lucide-react';
import ScrollReveal from 'scrollreveal';

const Login = () => {
    useEffect(() => {
        ScrollReveal().reveal(".reveal-x-alt", {
            origin: "right",
            distance: "100px",
            duration: 1500,
            easing: "ease-in-out",
            reset: false
        })
    }, []);


  return (
    <div className="py-14 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 px-4">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="text-white text-3xl font-bold flex justify-center items-center gap-2">
           <Car className='w-10 h-10' /> <span>EliteCar</span>
          </div>
        </div>
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-8 pt-5 reveal-x-alt">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">Bem-vindo de volta</h2>
        <p className="text-center text-gray-500 mb-6">Faça login em sua conta</p>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Endereço de e-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Senha"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-2 justify-between text-sm mb-6">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="cursor-pointer appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <span className='text-base'>Lembre-me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">Esqueceu a senha?</a>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-200"
          >
            Acessar conta
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-between gap-6 my-6">
          <span className="border-t border-gray-300 w-full"></span>
          <span className="text-sm text-gray-400 w-full">Ou continue com</span>
          <span className="border-t border-gray-300 w-full"></span>
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button className="w-1/2 flex cursor-pointer items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
            <Instagram className="mr-2" /> Google
          </button>
          <button className="w-1/2 flex cursor-pointer items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
            <Facebook className="mr-2" /> Facebook
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Não tem uma conta?{' '}
          <a href="/register" className="text-blue-500 hover:underline">Inscrever-se</a>
        </p>
      </div>
    </div>
  )
}

export default Login