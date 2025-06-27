import { TutorialItem } from '@/types/portal';

export async function fetchTutorialsList(): Promise<TutorialItem[]> {
  const res = await fetch(
    `${process.env.KUROCO_BASE_URL}/rcms-api/3/tutorial/list`,
    {
      next: { revalidate: 60 },
      headers: {
        Accept: '*/*',
        'X-RCMS-API-ACCESS-TOKEN': process.env.KUROCO_API_TOKEN || '',
      },
    },
  );

  if (!res.ok) throw new Error('Failed to fetch tutorials');
  const data = await res.json();
  return data.list;
}
