export default function RoutineFormPage(){
  const tallyUrl = process.env.NEXT_PUBLIC_TALLY_URL;
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Diagnostic routine peau</h1>
      {!tallyUrl ? (
        <div className="card p-6">
          <p className="text-neutral-700">Le formulaire Tally n’est pas encore configuré.</p>
          <p className="mt-2 text-sm text-neutral-500">
            Ajoutez la variable <code>NEXT_PUBLIC_TALLY_URL</code> dans Vercel → Project → Settings → Environment Variables
            avec l’URL de votre formulaire (ex: https://tally.so/r/xxxxxx). Puis redeploy.
          </p>
        </div>
      ) : (
        <iframe
          src={tallyUrl}
          className="w-full h-[1200px] border rounded-2xl bg-white"
          allow="fullscreen; clipboard-read; clipboard-write"
        />
      )}
    </main>
  );
}
