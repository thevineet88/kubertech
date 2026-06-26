import ScrollReveal from './ScrollReveal'

const stats = [
  { value: '8+ yrs', label: 'Full-cycle product delivery, design to deploy' },
  { value: '2M+', label: 'Users served on products we have built and run' },
  { value: '500k+', label: 'Documents indexed in a production RAG system we shipped' },
  { value: '99.9%', label: 'Uptime on the cloud infrastructure we own' },
]

export default function ProofBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-10 sm:py-12 lg:py-14">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-y-10">
          {stats.map((s, i) => (
            <ScrollReveal key={s.value} delay={0.06 * i} y={18}>
              <p className="text-[28px] sm:text-[34px] lg:text-[38px] font-semibold tracking-tight text-gray-900 leading-none">
                {s.value}
              </p>
              <p className="text-[12px] sm:text-[13px] text-gray-500 mt-2 leading-[1.45] max-w-[240px]">
                {s.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
