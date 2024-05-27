"use client";

import { Post } from "models/post";
import { Dispatch, MouseEvent, SetStateAction, useCallback, useRef, useState } from "react";
import { searchBlogs } from "services/blogServices";
import SearchResult from "./SearchResult";

export default function SearchModal({ setShow }: { setShow: Dispatch<SetStateAction<boolean>> }) {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState<Post[]>([]);

    const handleSearch = async () => {
        const result = await searchBlogs(query);
        setSearchResult(result.data);
    };

    const handleOnKeyDown = (event: any) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    const draggableRef = useRef(null);

    const isWithinComponent = (x: number, y: number) => {
        if (draggableRef.current) {
            const rect = (draggableRef.current as any)?.getBoundingClientRect();
            return (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom
            );
        }
        return false;
    };

    const handleClose = useCallback((event: MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = event;

        if (!isWithinComponent(clientX, clientY)) {
            setShow(false);
        }

    }, [setShow])


    return (
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center z-50 w-screen h-screen flex-col`} onClick={handleClose} 
        onKeyDown={(e) => {
            if(e.key === 'Escape') setShow(false)
        }}>
            <div ref={draggableRef}>
                <div className="bg-white overflow-hidden transition-all sm:max-w-lg sm:w-full hover:cursor-pointer mx-auto w-xl rounded-lg mt-8" style={{ width: "800px" }}>
                    <div className="bg-white">
                        <div className="sm:flex sm:items-start">
                            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} id="search"
                                className="bg-gray-50  block w-full p-2.5  dark:bg-gray-700  dark:placeholder-gray-400  outline-none" 
                                placeholder="Enter keyword for search..." onKeyDown={handleOnKeyDown} />
                        </div>
                    </div>
                    <hr />

                    {searchResult?.length > 0 && (
                        <SearchResult keyword={query} results={searchResult} />
                    )}

                    {searchResult?.length === 0 && (
                        <p className="flex justify-center text-md text-opacity-40">No Results Found</p>
                    )}
                    <hr />
                    <div id="instructions" className="flex justify-end pb-4">
                        <span className="text-sm">
                        Confirm <kbd className="mr-5 rounded border ml-1  text-gray-600 shadow-sm  items-center"> Enter </kbd>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}