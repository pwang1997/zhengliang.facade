"use client";

import Button from "components/button/Button";
import { useState } from "react";

export interface CategoryPanelDataProp {
    name: string; count: number
}
interface CategoryPanelProps {
    data: CategoryPanelDataProp[],
    handleOnClick: (name: string) => void
}

export default function CategoryPanel({ data, handleOnClick }: CategoryPanelProps) {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col pb-4">
            <div className="flex flex-col gap-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <div>
                    <button className="w-full text-left" onClick={() => setShow(!show)}>Filters</button>
                </div>

                <div className={`flex flex-wrap gap-2 ${!show && 'hidden'}`}>
                    {
                        data?.map(item => {
                            return (
                                <Button key={item.name as string} name={item.name} handleOnClick={() => handleOnClick(item.name)} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}