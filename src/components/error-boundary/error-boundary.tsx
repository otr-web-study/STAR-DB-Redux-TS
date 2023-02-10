import { Component, PropsWithChildren, ReactElement } from "react";

import ErrorIndicator from "components/error-indicator/error-indicator";

// interface ErrorBoundaryProps {
//   children: ReactElement[],
// }

interface ErrorBoundaryProps {};

interface ErrorBoundaryState {
  hasError: boolean,
}

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {

  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }
    return this.props.children;
  }

}

export default ErrorBoundary;