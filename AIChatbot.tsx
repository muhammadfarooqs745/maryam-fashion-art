'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, PhoneCall } from 'lucide-react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isEscalated, setIsEscalated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Assalam-o-Alaikum! Welcome to Maryam Fashion Arts. I am your AI Fashion Assistant. Ask me about bridal outfits, fabric details, sizing, or payment methods in English, Urdu, or Hinglish!' }
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      let aiText = "Our luxury collections feature pure organza, raw silk, and embroidered chiffon. For bespoke sizing, visit our Custom Stitching section.";
      if (userMsg.toLowerCase().includes('bridal') || userMsg.toLowerCase().includes('lehenga')) {
        aiText = "Our Royal Red Bridal Lehnga and Golden Embellished Maxi are top choices for weddings. Prices start from PKR 150,000.";
      } else if (userMsg.toLowerCase().includes('size') || userMsg.toLowerCase().includes('maap')) {
        aiText = "Please check our standard size guide or provide your custom measurements (Chest, Waist, Hip) for our master tailors.";
      } else if (userMsg.toLowerCase().includes('whatsapp') || userMsg.toLowerCase().includes('agent')) {
        setIsEscalated(true);
        aiText = "Connecting you directly to our WhatsApp support line for senior consultant help.";
      }
      setMessages(prev => [...prev, { sender: 'ai', text: aiText }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-luxury-gold text-luxury-black p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-luxury-gold-light transition font-semibold"
        >
          <Sparkles size={20} />
          <span className="hidden sm:inline">Maryam Fashion Assistant</span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-luxury-charcoal text-luxury-white border border-luxury-gold/40 rounded-2xl shadow-2xl flex flex-col h-[500px] overflow-hidden">
          <div className="bg-luxury-black p-4 border-b border-luxury-gold/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="text-luxury-gold" size={18} />
              <h3 className="font-serif font-bold text-luxury-gold tracking-wide">Maryam Fashion Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-luxury-white hover:text-luxury-gold">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl ${m.sender === 'user' ? 'bg-luxury-gold text-luxury-black font-medium' : 'bg-luxury-black border border-luxury-gold/20 text-luxury-beige'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isEscalated && (
              <div className="p-3 bg-green-950 border border-green-500 rounded-xl text-center">
                <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-green-400 font-bold text-xs uppercase tracking-wider">
                  <PhoneCall size={16} /> Open WhatsApp Support
                </a>
              </div>
            )}
          </div>

          <div className="p-3 bg-luxury-black border-t border-luxury-gold/20 flex items-center gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask in English, Urdu, Hinglish..."
              className="flex-1 bg-luxury-charcoal text-luxury-white px-3 py-2 rounded-lg border border-luxury-gold/30 text-sm focus:outline-none focus:border-luxury-gold"
            />
            <button onClick={handleSend} className="bg-luxury-gold text-luxury-black p-2 rounded-lg hover:bg-luxury-gold-light transition">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
