import { type PageMetadata } from "@apeze/core";

const HomePage = function () {
  return (
    <div class="min-h-screen bg-white">
      <nav class="border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div class="text-xl font-semibold text-gray-900">⚡ Apeze</div>
          <div class="flex gap-8 text-sm font-medium">
            <a href="#features" class="text-gray-900 hover:text-gray-600">
              Features
            </a>
            <a href="/docs" class="text-gray-900 hover:text-gray-600">
              Docs
            </a>
            <a href="/api/hello" class="text-gray-900 hover:text-gray-600">
              API
            </a>
          </div>
          <div class="flex gap-4">
            <a href="https://github.com/AsimSafarli/Apeze" class="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <div class="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 class="text-6xl font-bold text-gray-900 mb-6">
          Build fast with <span class="text-blue-600">Apeze</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Modern web framework powered by Bun. File-based routing, JSX support, and Tailwind CSS out of the box.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="/docs" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            Get Started
          </a>
          <a href="https://github.com/AsimSafarli/Apeze" class="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 hover:border-gray-400">
            View on GitHub
          </a>
        </div>
      </div>

      <div id="features" class="bg-gray-50 border-y border-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Everything you need
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl mb-4">⚡</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p class="text-gray-600">
                Powered by Bun runtime for incredible performance
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">📁</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                File-based Routing
              </h3>
              <p class="text-gray-600">
                Automatic routes from your pages directory
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">🎨</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Tailwind CSS
              </h3>
              <p class="text-gray-600">
                Built-in styling with zero configuration
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer class="border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
          Built with ⚡ Apeze Framework
        </div>
      </footer>
    </div>
  );
};

HomePage.metadata = {
  title: "Apeze - Modern Web Framework",
  description: "Build fast with Apeze. Modern web framework powered by Bun with file-based routing and JSX support.",
  keywords: ["apeze", "bun", "framework", "jsx", "tailwind"],
} satisfies PageMetadata;

export default HomePage;
