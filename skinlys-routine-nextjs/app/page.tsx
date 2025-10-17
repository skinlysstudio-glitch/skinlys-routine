
"use client";

import React, { useState } from "react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-skinlysRose via-white to-white text-stone-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl" style={{ backgroundColor: "#FFECEA" }} />
            <span className="font-semibold tracking-tight">Skinlys diagnostique skincare</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#comment-ca-marche" className="hover:opacity-70">Comment ça marche</a>
            <a href="#diagnostic" className="hover:opacity-70">Diagnostic</a>
            <a href="#temoignages" className="hover:opacity-70">Résultats</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#rdv" className="px-3 py-1.5 rounded-xl text-white hover:opacity-90" style={{ backgroundColor: "#C04027" }}>Prendre RDV</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-14 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block rounded-full border border-stone-200 px-3 py-1 text-xs uppercase tracking-wider">Nouveau • Accompagnement sur‑mesure</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Ta routine skincare <span className="text-skinlysBrique">personnalisée</span>,
            simple, efficace, validée par une pro.
          </h1>
          <p className="mt-4 text-stone-600">
            Analyse de peau, tri de tes produits actuels, recommandations claires matin/soir,
            fiches d’utilisation et suivi pour ajuster. Adapté à tous les budgets.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#diagnostic" className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-white font-medium shadow-sm hover:opacity-95" style={{ backgroundColor: "#C04027" }}>Commencer le diagnostic gratuit</a>
            <a href="#rdv" className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-stone-300 font-medium hover:bg-stone-50">Réserver une consultation</a>
          </div>
          <ul className="mt-4 text-sm text-stone-500 space-y-1 list-disc list-inside">
            <li>Adaptée aux peaux sensibles, acné, taches, anti‑âge, SOPK…</li>
            <li>Compatible avec tes produits actuels (ou alternatives proposées)</li>
            <li>Suivi optionnel pour optimiser les résultats</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-skinlysRose to-skinlysOrange shadow-xl" />
          <div className="absolute -bottom-6 -left-4 md:-left-10 p-4 rounded-2xl bg-white shadow-md border border-stone-200">
            <p className="text-xs font-medium">Exemple d’avant/après • 8 semaines</p>
            <div className="mt-2 h-2 w-48 bg-stone-100 rounded-full overflow-hidden">
              <div className="h-2 w-2/3" style={{ backgroundColor: "#C04027" }} />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="comment-ca-marche" className="bg-stone-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Comment ça marche ?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "1. Diagnostic", desc: "Réponds à quelques questions clés sur ta peau, tes habitudes et ton budget." },
              { title: "2. Routine sur‑mesure", desc: "Tu reçois une routine matin/soir claire + conseils d’utilisation. On peut intégrer tes produits actuels." },
              { title: "3. Suivi & ajustements", desc: "Optionnel : un point 2–4 semaines plus tard pour optimiser et adapter selon l’évolution." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm">
                <div className="h-10 w-10 rounded-xl mb-4" style={{ backgroundColor: "#FFECEA" }} />
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic form */}
      <section id="diagnostic" className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Diagnostic rapide (gratuit)</h2>
          <p className="mt-2 text-stone-600">2–3 minutes. Je te recontacte avec ta routine personnalisée et les prochaines étapes.</p>

          {/* ---- Embed du formulaire Tally (connecté à Airtable + email) ---- */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-stone-200 bg-white">
            <div className="p-4 text-sm text-stone-600">
              <p className="font-medium">Formulaire intégré</p>
              <p className="mt-1">Remplacer l’URL "YOUR_TALLY_FORM_URL" par l’URL d’intégration Tally une fois le formulaire connecté à Airtable et aux emails.</p>
            </div>
            <iframe title="Diagnostic Skinlys" src="YOUR_TALLY_FORM_URL" className="w-full" style={{height: '700px'}} frameBorder="0" />
          </div>

          <p className="mt-4 text-xs text-stone-500">
            En cas de souci avec le formulaire : écris à <a className="underline" href="mailto:skinlys.studio@gmail.com">skinlys.studio@gmail.com</a> ou réserve directement sur Planity.
          </p>
        </div>
      </section>

      {/* Social proof */}
      <section id="temoignages" className="bg-stone-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Résultats & avis</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-stone-100 to-stone-50" />
              <p className="mt-3 text-sm text-stone-700">« Merci encore de m’avoir fait découvrir ce soin. Après trois séances de peeling, je suis ravie du résultat : ma peau est beaucoup plus lumineuse, plus douce et repulpée. Merci pour les conseils à chaque venue — un vrai moment de bien‑être dans un endroit cosy. Je reviendrai avec plaisir pour découvrir d’autres prestations. »</p>
              <p className="mt-1 text-xs text-stone-500">— Cliente Skinlys (peeling LCP)</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-stone-100 to-stone-50" />
              <p className="mt-3 text-sm text-stone-700">« Depuis le peeling, je fais beaucoup plus attention à l’hydratation : matin et soir avec massage, et crème solaire la journée (promis !). Franchement, ma peau est super douce, j’adore. »</p>
              <p className="mt-1 text-xs text-stone-500">— Message cliente</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-stone-100 to-stone-50" />
              <p className="mt-3 text-sm text-stone-700">« Ma peau est toute douce, bombe de velours 💖 »</p>
              <p className="mt-1 text-xs text-stone-500">— Message cliente</p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm">
              <p className="text-sm text-stone-700">« J’ai eu la chance de faire un soin visage hydratant et c’était un pur bonheur. L’esthéticienne est douce, attentionnée et très professionnelle. Ma peau est ressortie éclatante et bien hydratée. Un vrai moment de bien‑être, je conseille sans hésiter ! »</p>
              <p className="mt-1 text-xs text-stone-500">— Camelia J. (avis Google)</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm">
              <p className="text-sm text-stone-700">« Venue à la base pour l’électrolyse (pas assez de repousse ce jour‑là), j’ai tellement été bien reçue par Maéva que je suis revenue le lendemain pour un soin visage : vraiment top. Je recommande à 100%. »</p>
              <p className="mt-1 text-xs text-stone-500">— Fanny C. (avis Google)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / RDV */}
      <section id="rdv" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Consultations & suivi</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Diagnostic express (en ligne)",
                price: "Gratuit",
                items: ["Questionnaire + analyse","Proposition de routine","Options de budget"],
                cta: "Remplir le formulaire",
                href: "#diagnostic",
              },
              {
                title: "Consultation initiale (30–60 min)",
                price: "à partir de 20€",
                items: ["Bilan de peau complet","Tri de produits actuels","Routine + plan d’action"],
                cta: "Réserver sur Planity",
                href: "https://www.planity.com/skinlys-studio-91100-villabe",
              },
              {
                title: "Suivi d’optimisation (20–30 min)",
                price: "à partir de 15€",
                items: ["Analyse des progrès","Ajustements ciblés","Réponses à tes questions"],
                cta: "Réserver",
                href: "https://www.planity.com/skinlys-studio-91100-villabe",
              },
            ].map((p, i) => (
              <a key={i} href={p.href} className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 font-medium" style={{ color: "#C04027" }}>{p.price}</p>
                <ul className="mt-3 text-sm text-stone-600 space-y-1 list-disc list-inside">
                  {p.items.map((it) => (<li key={it}>{it}</li>))}
                </ul>
                <div className="mt-4 inline-flex rounded-xl text-white px-4 py-2 text-sm" style={{ backgroundColor: "#C04027" }}>{p.cta}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-stone-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
          <div className="mt-6 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
            {[
              { q: "Combien de temps pour recevoir ma routine ?", a: "En général 24 à 72h ouvrées après le diagnostic (selon affluence)." },
              { q: "Mes produits actuels peuvent-ils être gardés ?", a: "Oui, on privilégie le ‘mieux’ au ‘plus’. On intègre ce qui fonctionne et propose des alternatives si nécessaire." },
              { q: "Y a‑t‑il un suivi ?", a: "Optionnel mais recommandé à 2–4 semaines pour ajuster et optimiser." },
              { q: "Est-ce pour tous les budgets ?", a: "Oui. Nous proposons plusieurs paniers (entrée, confort, premium)." },
            ].map((f, i) => (
              <details key={i} className="group px-6 py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-stone-400 group-open:rotate-45 transition">＋</span>
                </summary>
                <p className="mt-2 text-sm text-stone-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold">Skinlys diagnostique skincare</p>
            <p className="text-stone-600 mt-2">Électrolyse & beauté du regard • Routines & soins visage.</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <p className="text-stone-600 mt-2">Email : skinlys.studio@gmail.com</p>
            <p className="text-stone-600">Instagram : @skinlys.studio</p>
          </div>
          <div>
            <p className="font-semibold">Liens utiles</p>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#diagnostic">Diagnostic</a></li>
              <li><a className="hover:underline" href="#rdv">Prendre RDV</a></li>
              <li><a className="hover:underline" href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
