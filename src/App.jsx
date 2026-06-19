import './index.css'

export default function App() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 font-sans">
      <section className="mb-20">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-3">
          Klarissa Tey
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          CS student · building things on the web
        </p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/klarissatey" target="_blank" rel="noreferrer" className="text-gray-900 hover:text-gray-500 transition-colors">
            GitHub
          </a>
          <a href="mailto:klarissa.tey@gmail.com" className="text-gray-900 hover:text-gray-500 transition-colors">
            Email
          </a>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">About</h2>
        <p className="text-gray-600 leading-relaxed">
          Incoming senior studying computer science. I like building clean, useful software.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">Projects</h2>
        <div className="space-y-8">
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-gray-900 font-medium">Project Name</h3>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">View →</a>
            </div>
            <p className="text-sm text-gray-500">Short description of what this project does and what you learned.</p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-gray-900 font-medium">Project Name</h3>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">View →</a>
            </div>
            <p className="text-sm text-gray-500">Short description of what this project does and what you learned.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
