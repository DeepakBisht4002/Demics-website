import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import RootLayout from "./components/layout/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route
        path="/blog"
        element={
          <RootLayout>
            <BlogPage />
          </RootLayout>
        }
      />
    </Routes>
  );
};

export default App;
