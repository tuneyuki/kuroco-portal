import { BookOpenIcon, NewspaperIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Card } from './components/Card';


type TutorialItem = {
  topics_id: number;
  subject: string;
  contents: string;
  ymd: string;
  ext_1?: {
    url: string;
    desc?: string;
  };
};

async function fetchTutorials(): Promise<TutorialItem[]> {
  const res = await fetch(`${process.env.KUROCO_BASE_URL}/rcms-api/3/tutorial/list`, {
    next: { revalidate: 60 },
    headers: {
      Accept: '*/*',
      'X-RCMS-API-ACCESS-TOKEN': process.env.KUROCO_API_TOKEN || '',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch tutorials')
  }

  const data = await res.json()
  return data.list
}

const blogs = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // 2,3件も同様に用意してください
]

const news = [
  {
    id: 1,
    title: 'New feature released',
    href: '#',
    description: 'We just released a new feature to improve your experience.',
    date: 'Jun 1, 2025',
    datetime: '2025-06-01',
  },
  // 2,3件も同様に用意してください
]

export default async function Home() {
  const tutorials = (await fetchTutorials()).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12 lg:px-24">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">Welcome to MyPortal</h1>

      {/* Tutorials */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <BookOpenIcon className="h-8 w-8 text-indigo-600" />
          Tutorials
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {tutorials.map((tut) => (
            <Card
              key={tut.topics_id}
              title={tut.subject}
              href={`/tutorials/${tut.topics_id}`}
              description={tut.contents.replace(/<[^>]+>/g, '').slice(0, 100) + (tut.contents.length > 100 ? '...' : '')}
              date={tut.ymd}
              datetime={tut.ymd}
              icon={
                <img
                  src={tut.ext_1?.url || '/placeholder.jpg'}
                  alt="Tutorial thumbnail"
                  className="w-full h-full object-cover rounded-none"
                />
              }
            />
          ))}
        </div>
      </section>


      {/* Blogs */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <NewspaperIcon className="h-8 w-8 text-indigo-600" />
          Blogs
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              title={blog.title}
              href={blog.href}
              description={blog.description}
              date={blog.date}
              datetime={blog.datetime}
              categoryTitle={blog.category.title}
              categoryHref={blog.category.href}
              author={blog.author}
              icon={<NewspaperIcon />}
            />
          ))}
        </div>
      </section>

      {/* News */}
      <section>
        <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <SparklesIcon className="h-8 w-8 text-indigo-600" />
          News
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {news.map((n) => (
            <Card
              key={n.id}
              title={n.title}
              href={n.href}
              description={n.description}
              date={n.date}
              datetime={n.datetime}
              icon={<SparklesIcon />}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
