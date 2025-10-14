import { PageComponent } from '@apeze/core';

const DocsHome: PageComponent = () => {
  return (
    <div class="min-h-screen bg-white">
      <div class="flex">
        <aside class="w-64 bg-gray-50 border-r border-gray-200 min-h-screen p-6">
          <h2 class="text-xl font-bold mb-4">Documentation</h2>
          <nav class="space-y-2">
            <a href="/docs/getting-started" class="block py-2 px-3 rounded hover:bg-gray-200">
              Getting Started
            </a>
            <a href="/docs/routing" class="block py-2 px-3 rounded hover:bg-gray-200">
              Routing
            </a>
            <a href="/docs/components" class="block py-2 px-3 rounded hover:bg-gray-200">
              Components
            </a>
            <a href="/docs/api" class="block py-2 px-3 rounded hover:bg-gray-200">
              API Routes
            </a>
          </nav>
        </aside>

        <main class="flex-1 max-w-4xl mx-auto px-8 py-12">
          <h1 class="text-4xl font-bold mb-4">Apeze Documentation</h1>
          <p class="text-xl text-gray-600 mb-8">
            Welcome to the Apeze framework documentation.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <a href="/docs/getting-started" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
              <h3 class="text-xl font-semibold mb-2">🚀 Getting Started</h3>
              <p class="text-gray-600">Learn how to create your first Apeze app</p>
            </a>
            
            <a href="/docs/routing" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
              <h3 class="text-xl font-semibold mb-2">🛣️ Routing</h3>
              <p class="text-gray-600">File-based routing and dynamic routes</p>
            </a>
            
            <a href="/docs/components" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
              <h3 class="text-xl font-semibold mb-2">🎨 Components</h3>
              <p class="text-gray-600">Build reusable JSX components</p>
            </a>
            
            <a href="/docs/api" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
              <h3 class="text-xl font-semibold mb-2">⚡ API Routes</h3>
              <p class="text-gray-600">Create REST APIs with Swagger docs</p>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

DocsHome.metadata = {
  title: 'Documentation - Apeze',
  description: 'Complete guide to building apps with Apeze framework',
};

export default DocsHome;