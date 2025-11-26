import { Route, Routes, Outlet } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import RootLayout from "./components/layout/RootLayout";
import SingleBlogPage from "./pages/SingleBlogPage";
import ContactUs from "./pages/ContactUs";

const BlogLayout = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};
const ContactUsLayout = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPage />} />
        <Route path=":id" element={<SingleBlogPage />} />
      </Route>
      <Route path="/contact" element={<ContactUsLayout />}>
        <Route index element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default App;
