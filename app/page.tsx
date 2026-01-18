import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-semibold">Dukeel Transport</span>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="text-sm hover:underline">
              Home
            </a>
            <a href="#" className="text-sm hover:underline">
              About
            </a>
            <a href="#" className="text-sm hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to Dukeel Transport
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Your trusted partner for transportation and logistics solutions.
              This is a placeholder homepage ready for your content.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
              >
                Get Started
              </a>
              <a
                href="#"
                className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dukeel Transport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
