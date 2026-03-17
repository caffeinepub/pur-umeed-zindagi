import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import About from "@/pages/About";
import AnnualReports from "@/pages/AnnualReports";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Impact from "@/pages/Impact";
import Leadership from "@/pages/Leadership";
import Psychologists from "@/pages/Psychologists";
import Regions from "@/pages/Regions";
import Services from "@/pages/Services";
import Workshops from "@/pages/Workshops";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const regionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/regions",
  component: Regions,
});

const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leadership",
  component: Leadership,
});

const psychologistsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/psychologists",
  component: Psychologists,
});

const workshopsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/workshops",
  component: Workshops,
});

const impactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/impact",
  component: Impact,
});

const annualReportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/annual-reports",
  component: AnnualReports,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  regionsRoute,
  leadershipRoute,
  psychologistsRoute,
  workshopsRoute,
  impactRoute,
  annualReportsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
