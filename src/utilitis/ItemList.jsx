import React from 'react';

const ItemList = (props) => {
    const { data } = props;
    console.log(data);

    const handleImageError = (event) => {
        event.target.src = 'https://images.unsplash.com/photo-1558981000-3b61c3c2ca35'; 
    };

    return (
        <div>
            {
                data.map((element) => (
                    <div key={element.card.info.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4 flex items-center justify-between">
                        <div className="mr-4">
                            <div>
                                <p className="text-xl font-semibold text-gray-800 mb-2">{element.card.info.name}</p>
                                <p className="text-xl font-semibold text-gray-800 mb-2">{element.card.info.ratings.aggregatedRating.rating}</p>
                                <p className="text-green-600 font-semibold">Rs. {(element.card.info.price/100)}</p>
                                <p className="text-gray-600 mb-2">{element.card.info.description}</p>
                            </div>
                        </div>
                        <img 
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${element.card.info.imageId}`} 
                            alt={element.card.info.name} 
                            className="w-48 h-48 object-cover border border-gray-300 rounded-lg" // Added border styles
                            onError={handleImageError} 
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default ItemList;
