function DocsLayout({ children }: { children: any }) {
  const navigation = [
    { title: 'Getting Started', path: '/docs/getting-started' },
    { title: 'Routing', path: '/docs/routing' },
    { title: 'Components', path: '/docs/components' },
    { title: 'API Routes', path: '/docs/api' },
    { title: 'Middleware', path: '/docs/middleware' },
    { title: 'Deployment', path: '/docs/deployment' },
  ];

  return (
    <div class="flex min-h-screen bg-white">
      <aside class="w-64 bg-gray-50 border-r border-gray-200 p-6 sticky top-0 h-screen overflow-y-auto">
        <a href="/docs" class="block mb-6">
          <h2 class="text-xl font-bold">📚 Docs</h2>
        </a>
        
        <nav class="space-y-1">
          {navigation.map(item => (
            <a 
              href={item.path}
              class="block py-2 px-3 rounded text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div class="mt-8 pt-8 border-t border-gray-200">
          <a href="/api-docs" class="block py-2 px-3 text-blue-600 hover:text-blue-800">
            API Documentation →
          </a>
        </div>
      </aside>

      <main class="flex-1 max-w-4xl mx-auto px-8 py-12">
        {children}
      </main>
    </div>
  );
}

export default DocsLayout;