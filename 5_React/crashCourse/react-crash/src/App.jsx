import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route index path="/jobs" element={<JobsPage />} />
      <Route index path="/add-job" element={<AddJobPage />} />
      <Route index path="*" element={<NotFoundPage />} />
      <Route index path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="max-w-screen-xl mt-0 mb-0 mr-auto ml-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
