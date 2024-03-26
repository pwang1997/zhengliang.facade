export default function OutlinedChip({ name }: { name: string }) {
    return (
        <div
            className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gradient-to-tr 
            dark:from-gray-900 dark:to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-500
            border-2 dark:border-slate-400 hover:bg-gray-300dark:hover:bg-slate-500">
            <span>{name}</span>
        </div>
    )
}