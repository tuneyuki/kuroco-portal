import TutorialsSection from '@/components/Section/TutorialsSection';
import BlogsSection from '@/components/Section/BlogsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12 lg:px-24">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to MyPortal
      </h1>

      <TutorialsSection />
      <BlogsSection />
    </main>
  );
}
