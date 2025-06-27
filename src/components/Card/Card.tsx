import Link from 'next/link'

export function Card({
  title,
  href,
  description,
  date,
  datetime,
  categoryTitle,
  categoryHref,
  author,
  icon,
}: {
  title: string
  href: string
  description: string
  date: string
  datetime: string
  categoryTitle?: string
  categoryHref?: string
  author?: {
    name: string
    role: string
    href: string
    imageUrl: string
  }
  icon?: React.ReactNode
}) {
  return (
    <article className="flex flex-col h-full rounded-lg border border-gray-200 p-0 shadow-sm hover:shadow-md transition-shadow dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
      {icon && (
        <div className="w-full h-48">
          {icon}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-x-4 text-xs text-gray-500">
          <time dateTime={datetime}>{date}</time>
          {categoryTitle && categoryHref && (
            <a
              href={categoryHref}
              className="rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              {categoryTitle}
            </a>
          )}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{description}</p>

        {author && (
          <div className="mt-6 flex items-center gap-x-4">
            <img alt="" src={author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-700" />
            <div className="text-sm text-gray-900 dark:text-gray-100">
              <p>
                <a href={author.href} className="font-semibold hover:underline">
                  {author.name}
                </a>
              </p>
              <p className="text-gray-500 dark:text-gray-400">{author.role}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
