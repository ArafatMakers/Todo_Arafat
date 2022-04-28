import Header from "./components/Navbar/Header";
import TodoContextProvider from "./contexts/TodoContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <Header />
        <MainRoutes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
