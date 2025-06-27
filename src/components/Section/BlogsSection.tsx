import { BookOpenIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';
import { Card } from '@/components/Card';
import { fetchTutorialsList } from '@/lib/fetchTutorialsList';

export default async function BlogsSection() {
  const tutorials = (await fetchTutorialsList()).slice(0, 4);

  return (
    <section className="mb-16">
      <SectionHeading icon={<DocumentArrowDownIcon className="h-8 w-8 text-orange-300" />} label="Blogs" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
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
  );
}
