import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import HowManyMichusPage from "./pages/HowManyMichus";
import ToDoListPage from "./pages/ToDoListPage";
import FirstBlogPost from "./pages/blog-posts/24-12-20-post";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/json-puncheon/">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow space-y-5 overflow-y-auto">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-many-michus" element={<HowManyMichusPage />} />
            <Route path="/to-do-list" element={<ToDoListPage />} />
            <Route path="/24-12-20-post" element={<FirstBlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
