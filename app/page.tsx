// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Tailwind CSS with Next.js</title>
        <meta name="description" content="Learn how to use Tailwind CSS with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Using <span className="text-blue-600">Tailwind CSS</span> with Next.js
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how to quickly style your Next.js applications with the utility-first CSS framework
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            title="Easy Setup" 
            description="Install Tailwind CSS in minutes with the official Next.js guide." 
            icon="🚀"
          />
          <FeatureCard 
            title="Responsive Design" 
            description="Build responsive layouts directly with utility classes." 
            icon="📱"
          />
          <FeatureCard 
            title="Dark Mode" 
            description="Easily implement dark mode with Tailwind's dark variant." 
            icon="🌙"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Start Guide</h2>
          <div className="space-y-4">
            <Step step={1} text="Create a new Next.js project" code="npx create-next-app@latest my-app" />
            <Step step={2} text="Install Tailwind CSS and its dependencies" code="npm install -D tailwindcss postcss autoprefixer" />
            <Step step={3} text="Initialize Tailwind CSS" code="npx tailwindcss init -p" />
            <Step step={4} text="Configure your template paths in tailwind.config.js" />
            <Step step={5} text="Add the Tailwind directives to your CSS file" />
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-600">
        <p>Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  )
}

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Step = ({ step, text, code }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">
      {step}
    </div>
    <div>
      <p className="font-medium text-gray-800">{text}</p>
      {code && <code className="block mt-1 bg-gray-100 p-2 rounded-md text-sm font-mono">{code}</code>}
    </div>
  </div>
)