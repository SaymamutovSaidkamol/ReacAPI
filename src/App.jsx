import { Toaster } from "react-hot-toast";
import MainRoutes from "./pages";

function App() {
  return (
    <>
      <MainRoutes />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
