export function TagChip({ tagName }: { tagName: string }) {
  return (
    <span className='inline-block rounded-full bg-blue-500  px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white 
    bg-gradient-to-r from-sky-400 to-emerald-600 dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
      {tagName}
    </span>
  );
}

