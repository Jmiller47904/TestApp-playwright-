# playwight-test-app

## Repository structure
```
playwright-test-app/
├── package.json
├── vite.config.js
├── index.html
├── playwright.config.ts
├── tsconfig.json
├── public/
│   └── favicon.ico
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── Counter.tsx
│   │   ├── TodoList.tsx
│   │   ├── Modal.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Form.tsx
│   │   └── Widgets.tsx
│   └── index.css
├── tests/
│   └── example.spec.ts
└── .github/
    └── workflows/
        └── playwright.yml
```

---

### `package.json`
```json
{
  "name": "playwright-test-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "playwright test --reporter=html"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@playwright/test": "^1.47.0",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "typescript": "^5.6.2",
    "vite": "^5.3.4"
  }
}
```

### `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Playwright Test App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `src/main.tsx`
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### `src/index.css`
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f4f4f4;
}
button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
```

### `src/App.tsx`
```tsx
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Modal from './components/Modal'
import Dropdown from './components/Dropdown'
import Form from './components/Form'
import Widgets from './components/Widgets'

function App() {
  return (
    <div>
      <h1>Playwright Test Playground</h1>
      <Counter />
      <TodoList />
      <Modal />
      <Dropdown />
      <Form />
      <Widgets />
    </div>
  )
}

export default App
```

---
### Components

#### `src/components/Counter.tsx`
```tsx
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Counter</h2>
      <p data-testid="counter-value">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
```

#### `src/components/TodoList.tsx`
```tsx
import { useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState('')

  return (
    <div>
      <h2>Todo List</h2>
      <input
        placeholder="Add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, input])
          setInput('')
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
```

#### `src/components/Modal.tsx`
```tsx
import { useState } from 'react'

export default function Modal() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h2>Modal Example</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <div style={{ background: '#ddd', padding: '20px' }}>
          <p>This is a modal!</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  )
}
```

#### `src/components/Dropdown.tsx`
```tsx
import { useState } from 'react'

export default function Dropdown() {
  const [selected, setSelected] = useState('Option 1')

  return (
    <div>
      <h2>Dropdown</h2>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        data-testid="dropdown"
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <p>Selected: {selected}</p>
    </div>
  )
}
```

#### `src/components/Form.tsx`
```tsx
import { useState } from 'react'

export default function Form() {
  const [submitted, setSubmitted] = useState('')

  return (
    <div>
      <h2>Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const data = new FormData(e.currentTarget)
          setSubmitted(data.get('name') as string)
        }}
      >
        <input name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Hello, {submitted}!</p>}
    </div>
  )
}
```

#### `src/components/Widgets.tsx`
```tsx
import { useState } from 'react'

export default function Widgets() {
  const [checked, setChecked] = useState(false)
  const [range, setRange] = useState(50)

  return (
    <div>
      <h2>Widgets</h2>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Accept terms
      </label>
      <p>{checked ? 'Accepted' : 'Not accepted'}</p>

      <label>
        Volume: {range}
        <input
          type="range"
          min="0"
          max="100"
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
      </label>
    </div>
  )
}
```

---

### `playwright.config.ts`
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
  },
  reporter: [['list'], ['html', { open: 'never' }]],
})
```

### `tests/example.spec.ts`
```ts
import { test, expect } from '@playwright/test'

test('counter increments and decrements', async ({ page }) => {
  await page.goto('/')
  const counter = page.getByTestId('counter-value')
  await expect(counter).toHaveText('0')
  await page.getByRole('button', { name: 'Increment' }).click()
  await expect(counter).toHaveText('1')
  await page.getByRole('button', { name: 'Decrement' }).click()
  await expect(counter).toHaveText('0')
})

test('form submission', async ({ page }) => {
  await page.goto('/')
  await page.fill('input[name="name"]', 'Jake')
  await page.getByRole('button', { name: 'Submit' }).click()
  await expect(page.locator('text=Hello, Jake!')).toBeVisible()
})
```

---

### `.github/workflows/playwright.yml`
```yaml
name: Playwright Tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npm run test

      - name: Upload Playwright HTML Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report
          retention-days: 7
```
