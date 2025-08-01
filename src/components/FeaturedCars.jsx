import React from 'react'
import bmw from "../assets/bmw.jpg"
import tesla from "../assets/tesla.jpg"
import audi from "../assets/audi.jpg"
import toyota from "../assets/toyota.jpg"
import kia from "../assets/kia.jpg"
import ford from "../assets/ford.jpg"
import { Car } from "lucide-react";
import { MapPin } from 'lucide-react';
import { Users } from 'lucide-react';
import { Cog } from 'lucide-react';
import { Fuel } from 'lucide-react';
import { Star } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

//ScrollReveal
import ScrollReveal from 'scrollreveal'

const cars = [
  {
    id: 1,
    name: 'Tesla Modelo 3',
    year: 2023,
    location: 'São Francisco',
    seats: 5,
    transmission: 'Automático',
    fuel: 'Elétrico',
    price: 89,
    rating: 4.8,
    badges: ['Piloto automático', 'Audio Premium', '+2'],
    type: 'Elétrico',
    status: 'Disponível',
    image: tesla,
  },
  {
    id: 2,
    name: 'BMW X5',
    year: 2023,
    location: 'New York',
    seats: 7,
    transmission: 'Automático',
    fuel: 'Gasolina',
    price: 149,
    rating: 4.7,
    badges: ['Assentos de couro', 'Piloto automático', '+2'],
    type: 'SUV Luxo',
    status: 'Disponível',
    image: bmw,
  },
  {
    id: 3,
    name: 'Audi A4',
    year: 2023,
    location: 'Los Angeles',
    seats: 5,
    transmission: 'Automático',
    fuel: 'Gasolina',
    price: 79,
    rating: 4.6,
    badges: ['Cockpit virtual', 'Assentos aquecidos', '+2'],
    type: 'Sedan',
    status: 'Disponível',
    image: audi,
  },
  {
    id: 4,
    name: 'Toyota Auris',
    year: 2022,
    location: 'New York',
    seats: 5,
    transmission: 'Automático',
    fuel: 'Gasolina',
    price: 49,
    rating: 4.4,
    badges: ['Confiável', 'Econômico', '+1'],
    type: 'Sedan',
    status: 'Disponível',
    image: toyota,
  },
  {
    id: 5,
    name: 'Ford Explorer',
    year: 2021,
    location: 'Boston',
    seats: 7,
    transmission: 'Automático',
    fuel: 'Gasolina',
    price: 69,
    rating: 4.5,
    badges: ['Espaçoso', 'Tração nas quatro rodas'],
    type: 'SUV',
    status: 'Disponível',
    image: ford,
  },
  {
    id: 6,
    name: 'Kia Sportage',
    year: 2022,
    location: 'Texas',
    seats: 5,
    transmission: 'Automático',
    fuel: 'Híbrido',
    price: 65,
    rating: 4.3,
    badges: ['Híbrido', 'Interior moderno'],
    type: 'Crossover',
    status: 'Disponível',
    image: kia,
  },
];

const FeaturedCars = () => {
  return (
    <section className="bg-gray-100 py-20 sm:px-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12 head-reveal">
        <h2 className="sm:text-4xl text-3xl font-bold mb-2 flex justify-center items-center gap-2">
          <span className="text-blue-500"><Car className='w-12 h-12' /></span><span className='text-gray-800'>Carros em destaque</span>
        </h2>
        <p className="text-gray-600 text-lg">Descubra nossa seleção de veículos premium escolhidos a dedo, perfeitos para qualquer viagem</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-3 reveal-y">
            <div className="relative overflow-hidden">
              <img src={car.image} alt={car.name} className="rounded-md w-full h-48 sm:h-56 md:h-60 object-cover" />
              <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow">{car.type}</span>
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">{car.status}</span>
            </div>
            <div className="mt-4">
                <div className='flex justify-between items-center'>
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <div className="text-yellow-500 text-sm flex items-center gap-1"><Star className='w-5 h-5' />{car.rating}</div>
                </div>
              <p className="text-sm text-gray-500">{car.year}</p>
              <div className="flex items-center text-sm text-gray-500 my-4 gap-1">
                <MapPin className='w-4 h-4' /><span>{car.location}</span>
              </div>
              <div className="flex sm:items-center sm:flex-row flex-col sm:gap-10 gap-2 mt-2 text-gray-600 text-sm">
                <span className='inline-flex items-center gap-1'><Users className='w-4 h-4 text-blue-500' /> {car.seats} Lugares</span>
                <span className='inline-flex items-center gap-1'><Cog className='w-4 h-4 text-blue-500' /> {car.transmission}</span>
                <span className='inline-flex items-center gap-1'><Fuel className='w-4 h-4 text-blue-500' /> {car.fuel}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {car.badges.map((badge, i) => (
                  <span key={i} className="bg-gray-50 text-xs px-2 py-1 rounded-full font-semibold border border-gray-200">{badge}</span>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold text-blue-500">${car.price}<span className="text-sm font-normal text-gray-500">/Dia</span></p>
              </div>
              <div className="flex sm:flex-row flex-col mt-4 gap-3">
                <button className="sm:w-1/2 w-full border border-gray-300 px-3 py-2 rounded cursor-pointer transition duration-300 hover:bg-gray-300">Ver detalhes</button>
                <button className="sm:w-1/2 w-full bg-green-600 text-white px-3 py-2 rounded cursor-pointer transition duration-300 hover:bg-green-700">Reservar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='mx-auto flex items-center justify-center mt-12 bg-blue-500 py-3 px-5 text-white rounded cursor-pointer gap-1 transition duration-300 hover:bg-blue-700'>Ver todos os carros <ArrowRight className='w-5 h-5' /></button>
    </section>
  )
}

export default FeaturedCars