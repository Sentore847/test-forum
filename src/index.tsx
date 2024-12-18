import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "app/providers/ThemeProvider";
import App from "./app/App";
import "shared/config/i18n/i18n";
import { StoreProvider } from "app/providers/StoreProvider";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  );
}
