"use client";

import Button from "components/button/Button";
import RectangleGroupIcon from "icons/RectangleGroupIcon";

export interface CategoryPanelDataProp {
    name: string; count: number
}
interface CategoryPanelProps {
    data: CategoryPanelDataProp[],
    handleOnClick: (name: string) => void
}

export default function CategoryPanel({ data, handleOnClick }: CategoryPanelProps) {
    return (
        <div className="flex flex-col gap-6 max-w-sm  min-w-full">
            <div className="flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

                <div className="flex gap-1">
                    <RectangleGroupIcon /> Tags
                </div>

                <div className="flex flex-wrap gap-2">
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