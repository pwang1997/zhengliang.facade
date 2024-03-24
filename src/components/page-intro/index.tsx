

export default function PageIntro({ name, description = '' }: { name: string, description?: string }) {
    return (
        <>
            <div className='px-4 sm:px-0'>
                <h3 className='flex text-3xl font-semibold leading-7 text-gray-900'>{name}</h3>
                <p className='mt-1 flex text-sm leading-6 text-gray-500'>
                    {description}
                </p>
            </div>
            <hr />
        </>
    )
}