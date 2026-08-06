import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloudOutlined,
  RobotOutlined,
  ThunderboltOutlined,
  MobileOutlined,
  SendOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
  FolderOpenOutlined,
  SearchOutlined,
  CloudUploadOutlined,
  LockOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

function LogoIcon({ className = "h-7 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 42 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.704 82H0.72L12.368 26.96H38.608L26.704 82ZM41.936 10.192C41.936 12.1547 41.5093 13.8613 40.656 15.312C39.888 16.7627 38.8213 18 37.456 19.024C36.176 20.048 34.6827 20.816 32.976 21.328C31.2693 21.84 29.52 22.096 27.728 22.096C24.3147 22.096 21.456 21.2853 19.152 19.664C16.848 18.0427 15.696 15.4827 15.696 11.984C15.696 10.1067 16.08 8.44267 16.848 6.992C17.616 5.456 18.64 4.21866 19.92 3.28C21.2853 2.256 22.8213 1.488 24.528 0.975998C26.32 0.463994 28.1547 0.207993 30.032 0.207993C33.36 0.207993 36.176 1.01866 38.48 2.64C40.784 4.26133 41.936 6.77866 41.936 10.192Z" fill="#4D6BFE"/>
    </svg>
  );
}

export function Landing() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Infy?",
      a: "Infy is an all-in-one cloud file management and AI-powered Document RAG platform. It integrates Google Drive and Dropbox into a unified dashboard, enabling semantic document Q&A via Gemini AI.",
    },
    {
      q: "How does the AI Chatbot search my documents?",
      a: "When you upload files (PDF, DOCX, TXT), Infy extracts text, generates vector embeddings, and stores them in Qdrant. When you ask a question, Gemini AI retrieves relevant context to provide accurate answers.",
    },
    {
      q: "Which platforms can I access Infy on?",
      a: "You can access Infy via our web application, the dedicated Telegram bot service, or our native Android mobile application.",
    },
    {
      q: "Are my files and login information secure?",
      a: "Yes! Infy uses JWT authentication, password hashing with bcrypt, and OTP email verification for complete account security.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-black font-poppins flex flex-col justify-between selection:bg-primary selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-stroke px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <LogoIcon className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
            <a
              href="#features"
              className="hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#ecosystem"
              className="hover:text-primary transition-colors"
            >
              Ecosystem
            </a>
            <a
              href="#how-it-works"
              className="hover:text-primary transition-colors"
            >
              How it Works
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          <button
            onClick={() => navigate("/auth")}
            className="px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-sm hover:bg-primary/90 transition-all duration-200 shadow-sm flex items-center gap-2 group"
          >
            Get Started
            <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 lg:px-12 pt-16 pb-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <ThunderboltOutlined />
              Next-Gen Cloud Storage & AI Document RAG
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Unified Storage & <br />
              <span className="text-primary">AI Document Chat</span>
            </h1>

            <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed">
              Connect Google Drive and Dropbox into one seamless workspace.
              Extract insights, search semantically, and chat with your
              documents using Gemini AI.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate("/auth")}
                className="px-7 py-3.5 bg-primary text-white font-medium text-base rounded-sm hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-3 group"
              >
                Launch Infy
                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#features"
                className="px-6 py-3.5 bg-white text-black font-medium text-base rounded-sm border border-stroke hover:border-primary/50 transition-all duration-200 shadow-sm"
              >
                Explore Features
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs font-medium text-secondary">
              <span className="flex items-center gap-1.5">
                <CheckCircleFilled className="text-primary" /> Multi-Cloud Sync
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleFilled className="text-primary" /> Gemini AI
                Built-in
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleFilled className="text-primary" /> Telegram & Mobile
                Support
              </span>
            </div>
          </div>

          {/* Interactive Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-md blur-xl opacity-70"></div>
            <div className="relative bg-white border border-stroke rounded-md p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-stroke pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <CloudOutlined />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Storage Overview</h3>
                    <p className="text-xs text-secondary">
                      Google Drive + Dropbox
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-medium bg-green-50 text-green-600 rounded-full border border-green-200">
                  Connected
                </span>
              </div>

              {/* Progress meters */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="flex items-center gap-1.5 text-black">
                      <FolderOpenOutlined className="text-primary" /> Google
                      Drive
                    </span>
                    <span className="text-secondary">9.8 GB / 15 GB</span>
                  </div>
                  <div className="w-full h-2 bg-bg rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-[65%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="flex items-center gap-1.5 text-black">
                      <FolderOpenOutlined className="text-primary" /> Dropbox
                    </span>
                    <span className="text-secondary">800 MB / 2 GB</span>
                  </div>
                  <div className="w-full h-2 bg-bg rounded-full overflow-hidden">
                    <div className="h-full bg-primary/70 rounded-full w-[40%]"></div>
                  </div>
                </div>
              </div>

              {/* AI Chat Bot Demo Card */}
              <div className="bg-bg border border-stroke rounded-sm p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <RobotOutlined /> Infy AI Assistant
                </div>
                <div className="bg-white p-2.5 rounded-sm border border-stroke text-xs text-black">
                  <span className="font-semibold text-secondary">User: </span>
                  What are key metrics from the Q3 project report?
                </div>
                <div className="bg-primary/10 p-2.5 rounded-sm border border-primary/20 text-xs text-black">
                  <span className="font-semibold text-primary">Infy AI: </span>
                  Based on your uploaded PDF, user growth increased by 34% and
                  total cloud storage efficiency improved by 2.5x.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-white border-y border-stroke py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold text-primary">2-in-1</h4>
            <p className="text-xs text-secondary mt-1">
              Google & Dropbox Integration
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary">RAG AI</h4>
            <p className="text-xs text-secondary mt-1">
              Qdrant Vector Document Search
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary">3 Platforms</h4>
            <p className="text-xs text-secondary mt-1">
              Web, Telegram Bot, Android
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary">Instant</h4>
            <p className="text-xs text-secondary mt-1">
              OTP & JWT Secure Access
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section
        id="features"
        className="py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full"
      >
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Designed for Effortless Cloud Management
          </h2>
          <p className="text-sm text-secondary">
            Everything you need to search, organize, and chat with your files
            across all your storage providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 border border-stroke rounded-md hover:border-primary/50 hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
              <CloudOutlined />
            </div>
            <h3 className="text-lg font-semibold mb-2">Unified Cloud Hub</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Connect Google Drive and Dropbox. Access all your files in one
              clean, unified directory with live space tracking.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 border border-stroke rounded-md hover:border-primary/50 hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
              <RobotOutlined />
            </div>
            <h3 className="text-lg font-semibold mb-2">Document AI Chat</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Ask questions directly to your uploaded PDFs, Word documents, and
              text files using Gemini AI & Qdrant vector retrieval.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 border border-stroke rounded-md hover:border-primary/50 hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
              <CloudUploadOutlined />
            </div>
            <h3 className="text-lg font-semibold mb-2">Drag & Drop Upload</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Seamlessly drag and drop your files directly into the web
              interface for automatic cloud storage processing.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 border border-stroke rounded-md hover:border-primary/50 hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
              <SearchOutlined />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Semantic & File Search
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Instantly find files by filename or query contents semantically
              using AI embedding indexing.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 border border-stroke rounded-md hover:border-primary/50 hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
              <LockOutlined />
            </div>
            <h3 className="text-lg font-semibold mb-2">OTP Account Security</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Protect your account with encrypted JWT tokens, hashed passwords,
              and one-time password (OTP) email verification.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 border border-stroke rounded-md hover:border-primary/50 hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
              <FileTextOutlined />
            </div>
            <h3 className="text-lg font-semibold mb-2">Media & File Viewer</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Dedicated visual galleries for images and organized views for all
              document formats.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Ecosystem Section */}
      <section
        id="ecosystem"
        className="py-20 px-6 lg:px-12 bg-white border-y border-stroke"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              One Platform. Three Interfaces.
            </h2>
            <p className="text-sm text-secondary">
              Experience complete freedom to access your files and AI chatbot
              wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg border border-stroke p-6 rounded-md space-y-4">
              <div className="w-10 h-10 rounded-sm bg-primary text-white flex items-center justify-center text-lg font-bold">
                <ThunderboltOutlined />
              </div>
              <h3 className="text-xl font-semibold">React Web App</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Full featured browser workspace built with React 18, Vite, and
                Ant Design for desktop and laptop productivity.
              </p>
            </div>

            <div className="bg-bg border border-stroke p-6 rounded-md space-y-4">
              <div className="w-10 h-10 rounded-sm bg-primary text-white flex items-center justify-center text-lg font-bold">
                <SendOutlined />
              </div>
              <h3 className="text-xl font-semibold">Telegram Bot</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Interact with Infy directly inside Telegram. Upload documents,
                ask questions, and download files from chat.
              </p>
            </div>

            <div className="bg-bg border border-stroke p-6 rounded-md space-y-4">
              <div className="w-10 h-10 rounded-sm bg-primary text-white flex items-center justify-center text-lg font-bold">
                <MobileOutlined />
              </div>
              <h3 className="text-xl font-semibold">Android Mobile App</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Native Android application built with Kotlin & Jetpack Compose
                to manage cloud storage on mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full"
      >
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How Infy Works
          </h2>
          <p className="text-sm text-secondary">
            Get up and running with your unified storage in less than two
            minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="bg-white border border-stroke p-8 rounded-md relative text-center space-y-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto">
              1
            </div>
            <h3 className="text-lg font-semibold">Create an Account</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Sign up on Infy and verify your account using our fast OTP email
              confirmation.
            </p>
          </div>

          <div className="bg-white border border-stroke p-8 rounded-md relative text-center space-y-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto">
              2
            </div>
            <h3 className="text-lg font-semibold">Connect Cloud Storage</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Link your Google Drive or Dropbox accounts with secure OAuth2
              authorization.
            </p>
          </div>

          <div className="bg-white border border-stroke p-8 rounded-md relative text-center space-y-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto">
              3
            </div>
            <h3 className="text-lg font-semibold">Chat & Manage</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Browse your files and ask Gemini AI questions directly from the
              web, mobile, or Telegram.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-6 lg:px-12 bg-white border-y border-stroke"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-secondary">
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-stroke rounded-md overflow-hidden bg-bg"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-medium text-sm sm:text-base flex items-center justify-between gap-4 hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <QuestionCircleOutlined className="text-primary" />
                    {faq.q}
                  </span>
                  <span className="text-lg font-semibold">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-secondary border-t border-stroke/60 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-primary text-white rounded-md p-10 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Upgrade Your Cloud Experience?
            </h2>
            <p className="text-sm sm:text-base text-white/90">
              Join Infy today to manage your files and query documents with AI
              in one unified workspace.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate("/auth")}
                className="px-8 py-3.5 bg-white text-primary font-bold text-base rounded-sm hover:bg-white/90 transition-all duration-200 shadow-md inline-flex items-center gap-2 group"
              >
                Get Started Free
                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-white border-t border-stroke pt-16 pb-12 px-6 lg:px-12 text-xs text-secondary">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Footer Section: Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div
                onClick={() => navigate("/")}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <LogoIcon className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
              </div>
              <p className="text-secondary leading-relaxed max-w-sm">
                Unified cloud file storage management and AI Document Retrieval-Augmented Generation (RAG) platform. Integrate Google Drive and Dropbox seamlessly.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                All Systems Operational
              </div>
            </div>

            {/* Col 2: Product & Features */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Product</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Cloud Storage Hub
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    AI Document RAG
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Drag & Drop Upload
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Semantic Search
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Media Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Ecosystem */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Ecosystem</h4>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => navigate("/auth")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    React Web Workspace
                  </button>
                </li>
                <li>
                  <a href="#ecosystem" className="hover:text-primary transition-colors">
                    Telegram Bot Service
                  </a>
                </li>
                <li>
                  <a href="#ecosystem" className="hover:text-primary transition-colors">
                    Android Mobile App
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-primary transition-colors">
                    How it Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Quick Links & Security */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Account & Security</h4>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => navigate("/auth")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Sign In
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/auth")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Register Account
                  </button>
                </li>
                <li>
                  <span className="text-secondary/80">OAuth 2.0 Integration</span>
                </li>
                <li>
                  <span className="text-secondary/80">JWT & Email OTP Auth</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer Section: Copyright & Social */}
          <div className="pt-8 border-t border-stroke/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-secondary">
              Copyright © {new Date().getFullYear()} Infy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
