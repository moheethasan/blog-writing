import { createBrowserRouter } from "react-router-dom";
import Category from "../pages/Category/Category";
import BlogEditor from "../components/BlogEditor/BlogEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Category></Category>,
  },
  {
    path: "blogEditor",
    element: <BlogEditor></BlogEditor>,
  },
]);
export default router;
