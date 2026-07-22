'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-luxury-black/95 text-luxury-white border-b border-luxury-gold/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-luxury-gold hover:text-luxury-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex-shrink-0 text-center lg:text-left">
            <Link href="/" className="font-serif text-2xl tracking-widest text-luxury-gold font-bold">
              MARYAM FASHION ARTS
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-6 text-xs tracking-wider uppercase font-sans">
            <Link href="/shop" className="hover:text-luxury-gold transition">Shop</Link>
            <Link href="/bridal-collection" className="hover:text-luxury-gold transition">Bridal</Link>
            <Link href="/luxury-pret" className="hover:text-luxury-gold transition">Luxury Pret</Link>
            <Link href="/casual-wear" className="hover:text-luxury-gold transition">Casual</Link>
            <Link href="/abayas" className="hover:text-luxury-gold transition">Abayas</Link>
            <Link href="/unstitched" className="hover:text-luxury-gold transition">Unstitched</Link>
            <Link href="/accessories" className="hover:text-luxury-gold transition">Accessories</Link>
            <Link href="/custom-stitching" className="text-luxury-gold font-bold hover:underline">Custom Stitching</Link>
          </nav>

          <div className="flex items-center space-x-5">
            <Link href="/shop" className="hover:text-luxury-gold transition"><Search size={20} /></Link>
            <Link href="/dashboard" className="hover:text-luxury-gold transition"><Heart size={20} /></Link>
            <Link href="/cart" className="hover:text-luxury-gold transition relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-luxury-gold text-luxury-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">1</span>
            </Link>
            <Link href="/dashboard" className="hidden sm:block hover:text-luxury-gold transition"><User size={20} /></Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-luxury-black border-b border-luxury-gold/20 px-6 py-4 space-y-3">
          <Link href="/shop" className="block uppercase tracking-wider hover:text-luxury-gold text-sm">Shop</Link>
          <Link href="/bridal-collection" className="block uppercase tracking-wider hover:text-luxury-gold text-sm">Bridal</Link>
          <Link href="/luxury-pret" className="block uppercase tracking-wider hover:text-luxury-gold text-sm">Luxury Pret</Link>
          <Link href="/casual-wear" className="block uppercase tracking-wider hover:text-luxury-gold text-sm">Casual Wear</Link>
          <Link href="/abayas" className="block uppercase tracking-wider hover:text-luxury-gold text-sm">Abayas</Link>
          <Link href="/unstitched" className="block uppercase tracking-wider hover:text-luxury-gold text-sm">Unstitched</Link>
          <Link href="/custom-stitching" className="block uppercase tracking-wider text-luxury-gold font-bold text-sm">Custom Stitching</Link>
        </div>
      )}
    </header>
  );
}
