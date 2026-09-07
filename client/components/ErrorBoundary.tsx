import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("RI/OS crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            style={{
              minHeight: "100dvh",
              display: "grid",
              placeItems: "center",
              background: "#10110f",
              color: "#f3f0e9",
              fontFamily: "'DM Sans', Arial, sans-serif",
              textAlign: "center",
              padding: "24px",
            }}
          >
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "32px" }}>
                Something went wrong.
              </h1>
              <p style={{ opacity: 0.7, fontSize: "14px" }}>Please refresh the page to reopen RI/OS.</p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
