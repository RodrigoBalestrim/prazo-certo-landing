export default function Home() {
  const features = [
    { icon: "📷", title: "Leitor de código de barras", desc: "EAN-8, EAN-13, UPC e Code 128 pela câmera do celular." },
    { icon: "🔎", title: "Busca automática do produto", desc: "Nome e foto localizados em bases gratuitas, sem digitação manual." },
    { icon: "🔔", title: "Alertas por setor", desc: "Açougue e frios avisam com 15 dias; mercearia, bazar e FLV com 1 mês de antecedência." },
    { icon: "📄", title: "Relatórios em PDF", desc: "Geração por categoria ou por produtos próximos do vencimento, prontos para imprimir." },
    { icon: "👥", title: "Grupos de empresa", desc: "Lista compartilhada entre funcionários com papéis: owner, admin, manager, stockist e viewer." },
    { icon: "🤖", title: "Cadastro por foto com IA", desc: "A IA identifica produto, marca e categoria pela imagem. Você informa só validade e quantidade." },
    { icon: "📴", title: "Suporte offline", desc: "Funciona sem internet com sincronização automática quando a conexão volta." },
    { icon: "📱", title: "Android e Web", desc: "Multiplataforma com Expo, notificações push e interface responsiva." },
  ];

  const stack = ["React Native", "TypeScript", "Expo", "Expo Router", "Supabase", "PostgreSQL", "Edge Functions", "Google Gemini", "OpenAI", "APIs REST", "AsyncStorage"];

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Navegação */}
      <nav className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">Prazo Certo</span>
          <div className="hidden gap-6 text-sm font-medium text-zinc-600 sm:flex">
            <a href="#recursos" className="hover:text-zinc-900">Recursos</a>
            <a href="#tecnologias" className="hover:text-zinc-900">Tecnologias</a>
            <a href="https://prazo-certo.expo.app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">Aplicativo</a>
            <a href="https://github.com/RodrigoBalestrim/prazo-certo-app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">Código</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
        <p className="mx-auto mb-4 inline-block rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
          Controle de validade de produtos para mercados e empresas
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Nunca mais perca produto por vencimento
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600">
          O Prazo Certo é um aplicativo multiplataforma que escaneia, organiza e alerta sobre
          datas de validade — reduzindo desperdício e organizando seu estoque com inteligência artificial.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="https://prazo-certo.expo.app" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-zinc-900 px-7 py-3 font-semibold text-white transition hover:bg-zinc-700">
            Testar aplicativo
          </a>
          <a href="https://github.com/RodrigoBalestrim/prazo-certo-app" target="_blank" rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-7 py-3 font-semibold text-zinc-800 transition hover:bg-zinc-100">
            Ver código-fonte
          </a>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="border-t border-zinc-100 bg-zinc-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">Recursos</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section id="tecnologias" className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Tecnologias</h2>
          <p className="mt-3 text-zinc-600">Stack moderna: web e mobile com um único código TypeScript.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {stack.map((t) => (
              <span key={t} className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-emerald-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Pronto para testar?</h2>
          <p className="mt-3 text-emerald-50">
            Entre na demonstração web e conheça os recursos sem criar conta.
          </p>
          <a href="https://prazo-certo.expo.app" target="_blank" rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-white px-8 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50">
            Abrir demo
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        <p>Prazo Certo — projeto open source de Rodrigo Balestrim</p>
        <p className="mt-1">
          <a href="https://github.com/RodrigoBalestrim" className="hover:text-zinc-800">GitHub</a>
          {" · "}
          <a href="https://www.linkedin.com/in/rodrigo-balestrim-9a68b3212" className="hover:text-zinc-800">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}
