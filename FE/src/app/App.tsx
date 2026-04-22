/**
 * App.tsx — root component.
 *
 * Purpose:
 *   The top-level React component rendered by main.tsx.
 *
 * What goes here:
 *   - Wrap the tree with <AppProviders> (providers.tsx).
 *   - Render <AppRouter /> (router.tsx) inside the providers.
 *
 * Do NOT put:
 *   - Provider logic (belongs in providers.tsx).
 *   - Route definitions (belong in router.tsx).
 *   - Business logic (belongs in features/).
 */

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";



function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
