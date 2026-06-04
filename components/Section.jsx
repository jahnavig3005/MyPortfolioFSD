export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-sky-300">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
