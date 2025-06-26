import React from 'react';
import Link from 'next/link';

type TutorialItem = {
  topics_id: number;
  subject: string;
  contents: string;
  ymd: string;
};

async function fetchTutorials(): Promise<TutorialItem[]> {
  const res = await fetch(`${process.env.KUROCO_BASE_URL}/rcms-api/3/tutorial/list`, {
    next: { revalidate: 60 },
    headers: {
      Accept: '*/*',
      'X-RCMS-API-ACCESS-TOKEN': process.env.KUROCO_API_TOKEN || '',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tutorials');
  }

  const data = await res.json();
  return data.list;
}

export default async function TutorialListPage() {
  const tutorials = await fetchTutorials();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header with Back to Home */}
      <header className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 max-w-3xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">📚 Tutorials</h1>
        <Link
          href="/"
          className="text-indigo-600 hover:underline font-semibold text-sm"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Tutorial list */}
      <main className="max-w-3xl mx-auto px-6 py-8 space-y-8">
        {tutorials.map((item) => (
          <article
            key={item.topics_id}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/tutorials/${item.topics_id}`}>
              <h2 className="text-xl font-semibold text-indigo-600 hover:underline">
                {item.subject}
              </h2>
            </Link>
            <time
              dateTime={item.ymd}
              className="block text-sm text-gray-500 dark:text-gray-400 mt-1"
            >
              {item.ymd}
            </time>
            <div
              className="prose prose-indigo dark:prose-invert mt-4 max-w-none"
              dangerouslySetInnerHTML={{ __html: item.contents }}
            />
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
        © 2025 Kuroco Tutorials
      </footer>
    </div>
  );
}
