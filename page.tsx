import React from 'react';
import Navbar from '@/components/Navbar';
import AIChatbot from '@/components/AIChatbot';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-luxury-black/65 backdrop-blur-xs"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <span className="text-luxury-gold tracking-[0.3em] uppercase text-xs font-semibold">Maryam Fashion Arts • maryanfashionart.pk</span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-luxury-white tracking-wider">
            Where Elegance Meets Tradition
          </h1>
          <p className="text-luxury-beige text-base sm:text-lg max-w-xl mx-auto font-light">
            Artisanal bridal wear, luxurious pret, unstitched masterpieces, and bespoke custom stitching delivered worldwide.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/bridal-collection" className="bg-luxury-gold text-luxury-black px-8 py-3.5 uppercase tracking-widest text-xs font-bold rounded-none hover:bg-luxury-gold-light transition">
              Explore Bridal
            </Link>
            <Link href="/luxury-pret" className="border border-luxury-gold text-luxury-gold px-8 py-3.5 uppercase tracking-widest text-xs font-bold hover:bg-luxury-gold hover:text-luxury-black transition">
              Luxury Pret
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-gold font-bold">Curated Collections</h2>
          <p className="text-luxury-beige/70 uppercase text-xs tracking-widest">Handcrafted with precision and royal heritage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Bridal Wear', link: '/bridal-collection', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800' },
            { title: 'Luxury Pret', link: '/luxury-pret', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800' },
            { title: 'Unstitched Collection', link: '/unstitched', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800' }
          ].map((cat, idx) => (
            <div key={idx} className="group relative h-96 overflow-hidden border border-luxury-gold/30 cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${cat.img})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20 space-y-2">
                <h3 className="font-serif text-2xl font-bold text-luxury-white group-hover:text-luxury-gold transition">{cat.title}</h3>
                <Link href={cat.link} className="text-xs uppercase tracking-widest text-luxury-gold underline">Shop Collection</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AIChatbot />
    </div>
  );
}
