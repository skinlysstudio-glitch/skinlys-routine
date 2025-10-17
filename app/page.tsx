import Image from "next/image";
import PricingCard from "./components/PricingCard";
const PLANITY_URL = "https://www.planity.com/"; // Remplace par ton lien Planity exact
export default function Home() {
  return (
    <main>
      <section className="px-6 sm:px-10 pt-10 pb-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[280px,1fr] gap-8 items-center">
          <div className="flex md:block justify-center">
            <Image src="/logo-skinlys.png" alt="Skinlys Studio" width={260} height={260} priority className="rounded-xl"/>
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Skinlys Studio</h1>
            <p className="mt-3 text-lg text-neutral-700">
              Électrolyse définitive, Browlift & Rehaussement, Peelings LCP Paris, Soin Signature.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={PLANITY_URL} target="_blank" className="btn btn-primary">Prendre rendez-vous</a>
              <a href="/routine" className="btn btn-outline">Diagnostic routine</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">Prestations & tarifs</h2>
          <p className="text-neutral-600 mt-2 text-sm">Tarifs indicatifs – voir détails et disponibilités sur Planity.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <PricingCard title="Électrolyse – Diagnostic + 15 min" price="20 €" details={["Bilan personnalisé + 15 min d’épilation","Adapté à tous types de poils et zones"]} ctaHref={PLANITY_URL}/>
            <PricingCard title="Électrolyse – Séance 15 min" price="30 €" details={["Séance d’entretien ou zone ciblée","Méthode définitive, poil par poil"]} ctaHref={PLANITY_URL}/>
            <PricingCard title="Browlift" price="65 €" details={["Restructuration & fixation","Option teinture possible"]} ctaHref={PLANITY_URL}/>
            <PricingCard title="Rehaussement de cils (coréen)" price="75 €" details={["Courbure naturelle longue durée","Teinture en option"]} ctaHref={PLANITY_URL}/>
            <PricingCard title="Cure Peeling LCP (3 séances)" price="120 €" details={["Peeling esthétique concentré","Sans peler – teint lissé et éclat"]} ctaHref={PLANITY_URL}/>
            <PricingCard title="Soin Signature – 2h" price="120 €" details={["Nettoyage, massage, masque, soins ciblés","Offre actuelle (ancien tarif 150 €)"]} ctaHref={PLANITY_URL}/>
          </div>
        </div>
      </section>

      <footer className="px-6 sm:px-10 pb-10">
        <div className="max-w-6xl mx-auto text-sm text-neutral-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Skinlys Studio — Tous droits réservés.</p>
          <p>Villabé (91) — Instagram : @skinlys.studio</p>
        </div>
      </footer>
    </main>
  );
}
