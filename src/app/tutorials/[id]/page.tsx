import React from 'react';
import Link from 'next/link';

type TutorialDetail = {
  topics_id: number;
  subject: string;
  contents: string;
  ymd: string;
};

async function fetchTutorialDetail(id: string): Promise<TutorialDetail> {
  const res = await fetch(
    `${process.env.KUROCO_BASE_URL}/rcms-api/3/tutorial/details/${id}`,
    {
      next: { revalidate: 60 },
      headers: {
        Accept: '*/*',
        'X-RCMS-API-ACCESS-TOKEN': process.env.KUROCO_API_TOKEN || '',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch tutorial detail');
  }

  const data = await res.json();
  return data.details;
}

export default async function TutorialDetailPage({ params }: { params: { id: string } }) {
  const tutorial = await fetchTutorialDetail(params.id);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header with Back to Tutorials */}
      <header className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 max-w-3xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">📖 Tutorial Detail</h1>
        <Link
          href="/tutorials"
          className="text-indigo-600 hover:underline font-semibold text-sm"
        >
          ← Back to Tutorials
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-extrabold mb-2 text-indigo-600">{tutorial.subject}</h2>
        <time
          dateTime={tutorial.ymd}
          className="block text-sm text-gray-500 dark:text-gray-400 mb-6"
        >
          {tutorial.ymd}
        </time>
        <article
          className="prose prose-indigo dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: tutorial.contents }}
        />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
        © 2025 Kuroco Tutorials
      </footer>
    </div>
  );
}
