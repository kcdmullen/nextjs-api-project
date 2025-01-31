import Link from 'next/link';
import { getAll } from '../../lib/apiService';

interface Notice {
  title: string;
  post_date: string;
  content: string;
}

async function getAllNotices(query: string) {
  'use server';
  try {
    return await getAll(query);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Page() {
  const notices: Notice[] = await getAllNotices('election-notices');
  // Also 'election-notices?year=2024'
  return (
    <>
      <h1>Election Notices</h1>
      <ul>
        {notices.map((notice, index: number) => (
          <li key={index}>
            {notice.post_date} -{' '}
            <Link
              href={`https://knoxcounty.org${notice.content}`}
              target='_blank'
            >
              {notice.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
