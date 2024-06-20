import ErrorBoundary from "./component/Errorbodary"
import FakeTest from "./component/FakeTest"
import Main from "./component/Main"

function App() {

  return (
    <div>
      <FakeTest />
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </div>
  )
}

export default App
