# my-app

An Apeze Framework application.

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser.

## Project Structure

```
my-app/
├── pages/
│   ├── index.tsx      # Home page → /
│   └── api/
│       └── hello.ts   # API endpoint → /api/hello
├── public/            # Static files
├── styles/
│   └── global.css     # Global styles
├── apeze.config.ts    # Framework configuration
├── api.settings.ts    # API settings
├── tsconfig.json      # TypeScript configuration
└── package.json
```

## Creating Pages

Create a new JSX file in the `pages/` directory:

**pages/about.tsx**

```tsx
export default function AboutPage() {
  return (
    <div class="p-8">
      <h1 class="text-4xl font-bold">About Us</h1>
    </div>
  );
}
```

Navigate to `/about` and your page will be live!

## API Routes

Create API endpoints in `pages/api/`:

**pages/api/users.ts**

```typescript
export default function UsersAPI(req: Request) {
  return Response.json({
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ],
  });
}
```

## Documentation

- Swagger UI: http://localhost:4000/docs
- API Spec: http://localhost:4000/docs/spec.json

## Learn More

- [GitHub Repository](https://github.com/AsimSafarli/Apeze)

Built with ⚡ by Apeze Framework
