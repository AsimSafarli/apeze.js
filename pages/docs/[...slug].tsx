import { PageComponent } from "@apeze/core";
import { readFile } from "fs/promises";
import { join } from "path";
import DocsLayout from "../../components/docs/docs-layout";

const DynamicDocsPage: PageComponent = async (req, params) => {
  const slug = params.slug || ["index"];
  const filePath = join(process.cwd(), "docs", `${slug.join("/")}.md`);

  try {
    const markdown = await readFile(filePath, "utf-8");

    const html = markdown
      .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold mb-4">$1</h1>')
      .replace(
        /^## (.+)$/gm,
        '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>'
      )
      .replace(
        /^### (.+)$/gm,
        '<h3 class="text-2xl font-semibold mt-6 mb-3">$1</h3>'
      )
      .replace(
        /`([^`]+)`/g,
        '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>'
      )
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>');

    return (
      <DocsLayout
        children={
          <article
            class="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        }
      ></DocsLayout>
    );
  } catch (error) {
    return (
      <DocsLayout
        children={
          <div class="text-center py-12">
            <h1 class="text-3xl font-bold text-red-600 mb-4">404</h1>
            <p class="text-gray-600">Documentation page not found</p>
            <a
              href="/docs"
              class="text-blue-600 hover:underline mt-4 inline-block"
            >
              ← Back to docs
            </a>
          </div>
        }
      ></DocsLayout>
    );
  }
};

export default DynamicDocsPage;
