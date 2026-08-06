import { lazy, Suspense } from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import { Spin } from "antd";

const Landing = lazy(() => import("./components/Pages/Landing/Landing"));
const Auth = lazy(() =>
  import("./components/Auth/Auth").then((m) => ({ default: m.Auth }))
);
const Dashboard = lazy(() =>
  import("./components/Pages/Dashboard/Dashboard").then((m) => ({
    default: m.Dashboard,
  }))
);
const All = lazy(() =>
  import("./components/Pages/All/All").then((m) => ({ default: m.All }))
);
const Files = lazy(() =>
  import("./components/Pages/Files/Files").then((m) => ({ default: m.Files }))
);
const Images = lazy(() =>
  import("./components/Pages/Images/Images").then((m) => ({ default: m.Images }))
);
const Chatbot = lazy(() =>
  import("./components/Pages/Chatbot/Chatbot").then((m) => ({
    default: m.Chatbot,
  }))
);

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <Spin size="large" />
    </div>
  );
}

function App() {
  return (
    <Main>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/all" element={<All />} />
          <Route exact path="/files" element={<Files />} />
          <Route exact path="/images" element={<Images />} />
          <Route exact path="/infy" element={<Chatbot />} />
        </Routes>
      </Suspense>
    </Main>
  );
}

export default App;
