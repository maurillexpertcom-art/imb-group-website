
import React, { useState } from 'react'
import { Menu, Phone, Mail, MapPin, ChevronRight, CheckCircle2, Building2, Home, Wrench, ShieldCheck, Users2, Instagram, Facebook, Linkedin, MessageCircle, PhoneCall, MailCheck, ArrowRight, Star, Sparkles, Download, Globe } from "lucide-react";

const BRAND = {
  name: "IMB GROUP",
  tagline: "L’immobilier différemment !",
  phone: "+225 07 14 74 74 34",
  email: "imb_group@hotmail.com",
  address: "Cocody Riviera Ephrata, Abidjan – Côte d’Ivoire",
  whatsapp: "https://wa.me/2250714747434",
  logoUrl: "/assets/logo-imb.png",
  brand: { primary: "#111827", accent: "#0ea5e9" },
};

const NAV = [
  { id: "accueil", label: "Accueil" },
  { id: "services", label: "Services" },
  { id: "biens", label: "Biens" },
  { id: "process", label: "Processus" },
  { id: "temoignages", label: "Témoignages" },
  { id: "partenaires", label: "Partenaires" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  { icon: <Home className="w-6 h-6"/>, title: "Transaction & Location", desc: "Achat, vente, location de villas, appartements et bureaux avec un accompagnement 360°." },
  { icon: <Building2 className="w-6 h-6"/>, title: "Gestion Locative Pro", desc: "Encaissements, quittances, états des lieux, reporting, optimisation de rentabilité." },
  { icon: <Wrench className="w-6 h-6"/>, title: "Promotion & Rénovation", desc: "Mise en valeur, home staging, suivi de chantiers et coordination des corps de métiers." },
  { icon: <ShieldCheck className="w-6 h-6"/>, title: "Conseil & Due Diligence", desc: "Vérifications administratives, juridiques et techniques pour sécuriser vos opérations." },
];

const BIENS = [
  { titre: "Villa Duplex – Grand Bassam Mockey Ville Citydia", image: "/assets/biens/duplex-bassam-160.jpg", prix: "160 000 000 FCFA", details: "5 pièces · Garage 5 voitures · 336 m² · Une Piscine· Document ACD." },
  { titre: "Résidence Hôtelière – Jacqueville Abreby en bordure de mer", image: "/assets/biens/hotel-18chambres-jacqueville.jpg", prix: "1 500 000 000 FCFA", details: "25 pièces · 2400 m² · 18 Chambres et Suites · 30 Salles de bain ·  1 Salle de conférence · 1 Salle de sport · 1 SPA · Document ACD." },
  { titre: "Villa Duplex – Bonoua Yaou Ekressinville", image: "/assets/biens/maison-bonoua-4pièces.jpg", prix: "88 000 000 FCFA", details: "200 m² · 3 Chambres autonomes · Garage 2 véhicules · Zone accessible et sécurisée · Document ACD." },
  { titre: "Terrain – Samo", image: "/assets/biens/terrain-samo-50.jpg", prix: "15 000 000 FCFA", details: "990 m² · Zone constructible et viabilisée · Document ACD." },
  { titre: "Villa Triplex – Bingerville Adjin", image: "/assets/biens/triplex-6pieces-bingerville.jpg", prix: "160 000 000 FCFA", details: "6 pièces · Garage 2 véhicules · Document ACD." },
  { titre: "Immeuble Inachevé – Grand Bassam Citydia", image: "/assets/biens/immeuble-grosoeuvre-bassam.jpg", prix: "210 000 000 FCFA", details: "490 m² · 8 Appartements de 3 pièces · Zone Résidentielle · Document ACD." },
];

const TESTIMONIALS = [
  { name: "ABSOUS Florence ", text: "Service impeccable, du premier appel jusqu’à la remise des clés.", stars: 5 },
  { name: "YEO maxime", text: "Transparence et rigueur. J’ai enfin trouvé un partenaire fiable.", stars: 5 },
  { name: "GNAMIEN Mondésir", text: "Gestion locative claire, loyers versés à temps, rapports détaillés.", stars: 5 },
];

export default function App(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "imb_group@hotmail.com", phone: "+225 07 14 74 74 34", message: "" });
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({behavior:"smooth", block:"start"}); };
  const submit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\nMessage: ${form.message}`);
    window.location.href = `mailto:${BRAND.email}?subject=Demande depuis le site IMB GROUP&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm bg-gray-50 border-b">
        <div className="flex items-center gap-4">
          <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:opacity-80"><Phone className="w-4 h-4"/>{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 hover:opacity-80"><Mail className="w-4 h-4"/>{BRAND.email}</a>
          <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4"/>{BRAND.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <a href={BRAND.whatsapp} target="_blank" className="inline-flex items-center gap-2 hover:opacity-80"><MessageCircle className="w-4 h-4"/>WhatsApp</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex items-center gap-2 hover:opacity-80"><MailCheck className="w-4 h-4"/>Contact</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={BRAND.logoUrl} alt="IMB GROUP" className="h-12 w-auto"/>
              <div className="text-xs sm:text-sm text-gray-500 hidden md:block">{BRAND.tagline}</div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {NAV.map((n)=>(
                <button key={n.id} onClick={()=>scrollTo(n.id)} className="text-sm hover:text-gray-900 text-gray-600">{n.label}</button>
              ))}
              <button className="btn btn-primary" onClick={()=>scrollTo('contact')}>Demander une estimation</button>
            </nav>
            <button className="md:hidden" onClick={()=>setMenuOpen(!menuOpen)}><Menu /></button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-3 flex flex-col">
              {NAV.map((n)=>(
                <button key={n.id} onClick={()=>{scrollTo(n.id); setMenuOpen(false);}} className="py-2 text-left text-gray-700">{n.label}</button>
              ))}
              <button onClick={()=>{scrollTo('contact'); setMenuOpen(false);}} className="btn btn-primary mt-2">Contact</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="accueil" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 opacity-90"/>
        <img src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=2000&auto=format&fit=crop" aria-hidden className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"/>
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/10 px-3 py-1 text-xs">
              <Sparkles className="w-3.5 h-3.5"/> Excellence & Innovation
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Votre partenaire de confiance pour acheter, vendre et gérer vos biens</h1>
            <p className="mt-4 text-white/80">Accompagnement expert, due diligence rigoureuse et résultats mesurables sur tout le cycle immobilier.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="btn btn-primary" onClick={()=>scrollTo('biens')}>Voir les biens disponibles</button>
              <button className="btn btn-outline" onClick={()=>scrollTo('services')}>Nos services</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold">Services clé en main</h2>
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="text-sm inline-flex items-center gap-1">Demander un devis <ChevronRight className="w-4 h-4"/></a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s,i)=>(
              <div key={i} className="card">
                <div className="card-body">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">{s.icon}</div>
                  <h3 className="font-medium text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4"/> Qualité garantie
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biens */}
      <section id="biens" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold">Biens en vitrine</h2>
            <button className="btn btn-outline" onClick={()=>alert('Connectez votre CRM/Google Sheet pour alimenter cette section automatiquement.')}>Publier un bien</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BIENS.map((b,i)=>(
              <div key={i} className="group rounded-2xl overflow-hidden border-0 shadow-md bg-white">
                <div className="relative h-52 overflow-hidden">
                  <img src={b.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">{b.prix}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{b.titre}</h3>
                  <p className="text-sm text-gray-600 mt-1">{b.details}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a href={BRAND.whatsapp} target="_blank" className="inline-flex items-center gap-2 text-sm">En savoir plus <ArrowRight className="w-4 h-4"/></a>
                    <div className="text-xs text-gray-500">Réf: IMB-{100 + i}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Notre méthode en 4 étapes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Découverte du besoin","Due diligence","Mise en marché","Signature & suivi"].map((etape, idx)=>(
              <div key={idx} className="card">
                <div className="card-body">
                  <div className="text-sm text-gray-500">Étape {idx+1}</div>
                  <div className="mt-2 font-medium">{etape}</div>
                  <ul className="mt-3 text-sm text-gray-600 space-y-2 list-disc list-inside">
                    {idx===0 && (<><li>Brief & objectifs</li><li>Analyse du budget</li><li>Roadmap & délais</li></>)}
                    {idx===1 && (<><li>Vérifs juridiques & foncières</li><li>Contrôles techniques</li><li>Évaluation des risques</li></>)}
                    {idx===2 && (<><li>Mise en valeur & média</li><li>Diffusion ciblée</li><li>Négociation</li></>)}
                    {idx===3 && (<><li>Actes & signature</li><li>Remise des clés</li><li>Suivi post‑vente</li></>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t,i)=>(
              <div key={i} className="card">
                <div className="card-body">
                  <div className="flex items-center gap-2 text-yellow-500 mb-3">
                    {Array.from({length:t.stars}).map((_,j)=>(<Star key={j} className="w-4 h-4 fill-current" />))}
                  </div>
                  <p className="text-sm text-gray-700">“{t.text}”</p>
                  <div className="mt-4 text-sm font-medium">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section id="partenaires" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold">Partenaires & Réseau</h2>
            <a className="text-sm inline-flex items-center gap-2" href="#" onClick={(e)=>{e.preventDefault(); alert('Ajoutez vos logos partenaires (PNG/SVG).');}}>
              <Download className="w-4 h-4"/> Ajouter des logos
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {Array.from({length:12}).map((_,i)=>(
              <div key={i} className="h-16 bg-white rounded-xl border flex items-center justify-center text-xs text-gray-500">Logo {i+1}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Parlons de votre projet</h2>
              <p className="mt-3 text-gray-600">Décrivez votre besoin et recevez une estimation sous 24h ouvrées.</p>
              <div className="mt-6 space-y-3 text-sm">
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2"><PhoneCall className="w-4 h-4"/>{BRAND.phone}</a><br/>
                <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2"><Mail className="w-4 h-4"/>{BRAND.email}</a><br/>
                <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4"/>{BRAND.address}</span>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a href={BRAND.whatsapp} target="_blank" className="inline-flex items-center gap-2"><MessageCircle className="w-5 h-5"/> WhatsApp</a>
                <a href="#" onClick={(e)=>{e.preventDefault(); alert('Connectez votre page Facebook.');}} className="inline-flex items-center gap-2"><Facebook className="w-5 h-5"/> Facebook</a>
                <a href="#" onClick={(e)=>{e.preventDefault(); alert('Connectez votre page LinkedIn.');}} className="inline-flex items-center gap-2"><Linkedin className="w-5 h-5"/> LinkedIn</a>
                <a href="#" onClick={(e)=>{e.preventDefault(); alert('Connectez votre Instagram.');}} className="inline-flex items-center gap-2"><Instagram className="w-5 h-5"/> Instagram</a>
              </div>
            </div>
            <form onSubmit={submit} className="bg-gray-50 border rounded-2xl p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Nom & Prénom</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} placeholder="Ex: Marie‑Charlotte Gode" className="mt-1 w-full border rounded-md px-3 py-2"/>
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} placeholder="Ex: contact@imb.ci" className="mt-1 w-full border rounded-md px-3 py-2"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Téléphone</label>
                  <input value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} placeholder="Ex: +225 …" className="mt-1 w-full border rounded-md px-3 py-2"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Message</label>
                  <textarea required value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} placeholder="Décrivez votre projet…" className="mt-1 w-full border rounded-md px-3 py-2 min-h-[120px]"/>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4 w-full">Envoyer la demande</button>
              <p className="mt-3 text-xs text-gray-500">En soumettant, vous acceptez notre politique de confidentialité.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={BRAND.logoUrl} alt="IMB GROUP" className="h-8 w-auto"/>
            <p className="text-sm text-gray-600 mt-3">{BRAND.tagline}</p>
          </div>
          <div>
            <div className="font-medium mb-3">Navigation</div>
            <ul className="space-y-2 text-sm text-gray-600">
              {NAV.map(n=> (<li key={n.id}><a href={`#${n.id}`} onClick={(e)=>{e.preventDefault();scrollTo(n.id)}}>{n.label}</a></li>))}
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="text-xs text-gray-500">NCC : 2504286M</li>
              <li className="text-xs text-gray-500">RCCM : CI-ABJ-03-2025-B13-05816</li>
              <li className="inline-flex items-center gap-2"><Phone className="w-4 h-4"/>{BRAND.phone}</li>
              <li className="inline-flex items-center gap-2"><Mail className="w-4 h-4"/>{BRAND.email}</li>
              <li className="inline-flex items-center gap-2"><MapPin className="w-4 h-4"/>{BRAND.address}</li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Ressources</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" onClick={(e)=>{e.preventDefault(); alert('Ajoutez votre brochure PDF.');}}>Brochure PDF</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); alert('Ajoutez votre politique de confidentialité.');}}>Politique de confidentialité</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); alert('Ajoutez vos CGV/mentions légales.');}}>Mentions légales</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex flex-wrap items-center gap-2 justify-between">
            <span>© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</span>
            <a className="inline-flex items-center gap-1" href="#" onClick={(e)=>{e.preventDefault(); alert('Ajoutez votre nom de domaine, ex: imb.ci');}}><Globe className="w-3.5 h-3.5"/> imb.ci</a>
          </div>
        </div>
      </footer>

      {/* Floating CTAs */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3">
        <a href={BRAND.whatsapp} target="_blank" className="rounded-full shadow-lg bg-green-500 text-white px-4 py-3 inline-flex items-center gap-2">
          <MessageCircle className="w-5 h-5"/> WhatsApp
        </a>
        <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="rounded-full shadow-lg bg-gray-900 text-white px-4 py-3 inline-flex items-center gap-2">
          <PhoneCall className="w-5 h-5"/> Appeler
        </a>
      </div>
    </div>
  )
}
