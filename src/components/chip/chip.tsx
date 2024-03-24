export function TagChip({ tagName }: { tagName: string }) {
  return (
    <span className='inline-block rounded-full bg-blue-500 bg-gradient-to-r from-sky-400 to-emerald-600 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white'>
      {tagName}
    </span>
  );
}
