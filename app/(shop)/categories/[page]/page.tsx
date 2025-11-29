'use client';
import { use } from 'react';

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = use(params);

  return (
    <div>
      <p>{page}</p>
    </div>
  );
}
