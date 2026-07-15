# Day 3 Notes — React Router & Dashboard Layout

## Key Concepts

### React Router

- Enables navigation between pages without reloading the browser.
- Main APIs:
  - `BrowserRouter`
  - `Routes`
  - `Route`
  - `NavLink`
  - `Navigate`

### Nested Layouts

- Share common UI across multiple pages.
- Prevents repeating components like the Header and Sidebar.

### `<Outlet />`

- Placeholder where child routes are rendered.
- Only the page inside the outlet changes during navigation.

### Layout Components

- Arrange the application's structure.
- Examples:
  - `DashboardLayout`
  - `AuthLayout`
  - `Header`
  - `Sidebar`

### Protected Routes

- Restrict access to authenticated users.
- Redirect unauthenticated users using `Navigate`.

### `React.lazy()`

- Loads pages only when they are visited.
- Improves initial load performance.

```jsx
const Dashboard = lazy(() => import("../pages/Dashboard"));
```

### `<Suspense>`

- Displays a fallback UI while lazy-loaded components are downloading.

```jsx
<Suspense fallback={<Spinner />}>
  <AppRoutes />
</Suspense>
```

### CSS Grid vs Flexbox

- **Grid:** Overall page layouts.
- **Flexbox:** Aligning items inside components.

### Project Structure

```
src/
├── components/
├── layouts/
├── pages/
├── routes/
├── features/
└── assets/
```

## Best Practice

- Lazy-load **pages**, not small reusable components.
- Use **Grid** for page layouts and **Flexbox** for component layouts.
- Keep components focused on a single responsibility.
