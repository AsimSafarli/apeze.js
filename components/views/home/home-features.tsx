function HomeFeatures() {
  return (
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
  );
}

export default HomeFeatures;
