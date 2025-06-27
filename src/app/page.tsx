import Menu from '@/components/Menu/Menu';
import TutorialsSection from '@/components/Section/TutorialsSection';
import BlogsSection from '@/components/Section/BlogsSection';
import NewsSection from '@/components/Section/NewsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12 lg:px-24">
      <Menu />
      
      <TutorialsSection />
      <BlogsSection />
      <NewsSection />
    </main>
  );
}
