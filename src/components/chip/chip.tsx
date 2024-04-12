export function TagChip({ tagName }: { tagName: string }) {
  return (
    <span className='inline-block rounded-lg  px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white 
    bg-dark dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 hover:bg-gradient-to-bl 
    focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
      {tagName}
    </span>
  );
}

