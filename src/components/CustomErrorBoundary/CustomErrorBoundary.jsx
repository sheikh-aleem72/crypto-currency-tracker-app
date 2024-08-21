import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-[100vh] justify-center items-center px-10">
      <div role="alert" className="alert alert-error ">
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try Again</button>
      </div>
    </div>
  );
}

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorBoundaryUI}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
