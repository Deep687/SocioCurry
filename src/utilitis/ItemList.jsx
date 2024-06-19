import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const ItemList = ({ data }) => {
    const dispatch = useDispatch();

    const handleItem = (elements) => {
        dispatch(addItem(elements));
    };

    return (
        <div>
            {data.map((elements) => (
                <div key={elements.card.info.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4 flex items-center justify-between mb-4">
                    <div className="mr-4">
                        <div>
                            <p className="text-xl font-semibold text-gray-800 mb-2">{elements.card.info.name}</p>
                            <p className="text-xl font-semibold text-gray-800 mb-2">{elements.card.info.ratings.aggregatedRating.rating}</p>
                            <p className="text-green-600 font-semibold">Rs. {elements.card.info.defaultPrice / 100 || elements.card.info.price / 100}</p>
                            <p className="text-gray-600 mb-2">{elements.card.info.description}</p>
                            <button
                                className="bg-slate-700 rounded-md text-white px-4 py-2"
                                onClick={() => handleItem(elements)}
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${elements.card.info.imageId}`}
                        alt={elements.card.info.name}
                        loading='lazy'
                        className="w-48 h-48 object-cover border border-gray-300 rounded-lg"
                    />
                </div>
            ))}
        </div>
    );
}

export default ItemList;