import { ErrorComponent, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/Profile";
import Projet from "./components/project/Projet";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <DevtoolsProvider>
          <Refine
            // dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            routerProvider={routerBindings}
            resources={[]}
          // options={{
          //   syncWithLocation: true,
          //   warnWhenUnsavedChanges: true,
          //   useNewQueryKeys: true,
          //   projectId: "w1BlI0-ZYDPL1-QIJ6bk",
          // }}
          >
            {/* Conteneur global */}
            <div className="app-container">
              <Navbar /> {/* Inclusion de la barre de navigation */}
              <div className="main-layout">
                <Sidebar /> {/* Inclusion de la barre latérale */}
                <div className="content">
                  <Routes>
                    <Route path="/" element={<NavigateToResource resource="profile" />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/projet" element={<Projet />} />
                  </Routes>
                </div>
              </div>
            </div>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
