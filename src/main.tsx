import React, { Component, type ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in JanusMaad App:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bone text-ink flex items-center justify-center p-8 text-center">
          <div className="max-w-md space-y-4 bg-white p-8 rounded-3xl border border-hairline shadow-xl">
            <h2 className="text-2xl font-display font-bold text-ink">Janusmaad Digital</h2>
            <p className="text-sm text-mute leading-relaxed">
              We encountered a temporary rendering issue. Please click below to return home.
            </p>
            <button
              onClick={() => {
                window.location.hash = 'home';
                window.location.reload();
              }}
              className="px-6 py-3 bg-violet text-white font-display font-bold text-sm rounded-xl hover:bg-violet-deep transition-colors cursor-pointer"
            >
              Return Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
