export default function Button({ name, handleOnClick }: { name?: string, handleOnClick?: any }) {
    return (
        <button
            onClick={handleOnClick}
            className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br 
            bg-dark dark:from-purple-500 dark:to-blue-400 dark:group-hover:from-purple-600 dark:group-hover:to-blue-500
            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
            `}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
                #{name}
            </span>
        </button>
    )
}