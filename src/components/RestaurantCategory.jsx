import React, { useState } from 'react';
import ItemList from '../utilitis/ItemList';

const RestaurantCategory = (props) => {
    const { data } = props;
    const { title } = data;

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center"> {/* Centering container */}
            <div className="w-9/12"> {/* 70% width */}
                <div className="border border-gray-300 rounded-lg mb-4">
                    <div className="flex items-center justify-between px-4 py-3 cursor-pointer" onClick={toggleAccordion}>
                        <p className="text-lg font-medium">{title}({data.itemCards.length})</p>
                        <svg className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    {isOpen && (
                        <div className="px-4 py-3">
                            <div className="text-sm text-gray-700">
                                <ItemList  data={data.itemCards} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RestaurantCategory;
