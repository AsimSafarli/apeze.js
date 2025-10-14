import { PageComponent } from "@apeze/core";
import DocsLayout from "../../components/docs/docs-layout";

const GettingStarted: PageComponent = () => {
  return (
    <DocsLayout
      children={
        <article class="prose prose-lg max-w-none">
          <h1>Getting Started</h1>

          <h2>Installation</h2>
          <p>Install Apeze using Bun:</p>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>
              bunx create apeze my-app{"\n"}cd my-app{"\n"}bun apeze dev
            </code>
          </pre>

          <h2>Project Structure</h2>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`my-app/
├── pages/
│   ├── index.tsx
│   └── api/
│       └── hello.ts
├── components/
├── public/
└── api.settings.ts`}</code>
          </pre>

          <h2>Your First Page</h2>
          <p>
            Create a new page in <code>pages/hello.tsx</code>:
          </p>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`function HelloPage() {
  return <h1>Hello World!</h1>;
}

export default HelloPage;`}</code>
          </pre>
        </article>
      }
    />
  );
};

export default GettingStarted;
