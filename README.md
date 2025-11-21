# Entro Zen

**Entro Zen** is a modern, minimalist React component library built with accessibility and developer experience in mind.

[![npm version](https://badge.fury.io/js/@entro314labs%2Fentro-zen.svg)](https://www.npmjs.com/package/@entro314labs/entro-zen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **Beautifully-designed components** - Clean, modern, and minimalist design
- ♿ **Accessibility-first** - Built on top of [React Aria](https://react-spectrum.adobe.com/react-aria/) primitives
- 🎯 **Pure CSS** - No Tailwind dependency, complete control over styling
- 📱 **Responsive** - Mobile-first design with fluid layouts
- 🌙 **Theme support** - Built-in light and dark theme capabilities
- ⚡ **Lightweight** - Optimized bundle size with tree-shaking support
- 🔧 **TypeScript** - Full TypeScript support with comprehensive type definitions
- 🧪 **Test-ready** - Components designed for easy testing

## Installation

```bash
npm install @entro314labs/entro-zen
# or
yarn add @entro314labs/entro-zen
# or
pnpm add @entro314labs/entro-zen
```

## Quick Start

### Import styles

Import the CSS file in your app's root component:

```javascript
import '@entro314labs/entro-zen/styles.css';
```

### Basic usage

```jsx
import { Button, Input, Select, Modal } from '@entro314labs/entro-zen';

export default function MyApp() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <Select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    </div>
  );
}
```

## Available Components

- **Button** - Various styles and sizes with loading states
- **Input** - Text inputs with validation and error states
- **Select** - Dropdown selects with search and multi-select support
- **Modal** - Accessible modal dialogs
- **Form** - Form components with validation
- **Navigation** - Menu and navigation components
- **Data Display** - Tables, lists, and data visualization
- **Feedback** - Alerts, toasts, and loading indicators
- **Layout** - Grid, flex, and spacing utilities

## Development

This project uses pnpm for package management.

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the library
pnpm bundle

# Run linting
pnpm lint

# Generate icons
pnpm icons
```

### Project Structure

```
src/
├── components/       # React components
├── styles/          # CSS stylesheets
├── assets/          # Icons and other assets
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

### Build Process

The library uses a multi-stage build process:

1. **esbuild** - Fast TypeScript/JavaScript compilation
2. **rollup** - Module bundling and tree-shaking
3. **css.mjs** - CSS processing and extraction
4. **tsup** - TypeScript declaration file generation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Links

- [Website](https://entrolytics.click/)
- [Documentation](https://entrolytics.click/docs)
- [GitHub Repository](https://github.com/entro314-labs/react-git)
- [npm Package](https://www.npmjs.com/package/@entro314labs/entro-zen)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2024 Entrolytics <hello@entrolytics.click>
