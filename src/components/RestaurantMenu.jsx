import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utilitis/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();  // Fetching restaurant ID from URL params
    const resMenu = useRestaurantMenu(resId);  // Custom hook to fetch restaurant menu data

    const generateStars = (rating) => {
        // Function to generate star ratings based on average rating
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Full star
        }

        if (halfStar === 1) {
            stars.push(<span key={fullStars} className="text-yellow-500">&#9734;</span>); // Half star
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={fullStars + i + 1} className="text-gray-400">&#9734;</span>); // Empty star
        }

        return stars;
    };

    if (resMenu && resMenu.error) {
        return <div className="text-red-600">Error: {resMenu.error}</div>;  // Error handling
    }

    if (!resMenu || !resMenu.data) {
        return <div className="text-gray-600">Loading...</div>;  // Loading state
    }

    // Destructuring restaurant data
    const { name, cuisines, costForTwo, avgRating, locality } = resMenu.data.cards[2].card.card.info;

    // Filtering and mapping menu categories
    const categories = resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="container mx-auto py-8">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base mb-2">{locality}</p>
                    <div className="flex items-center mb-2">
                        <span className="text-lg mr-1">Average Rating:</span>
                        <div className="flex items-center">
                            {generateStars(avgRating)}
                        </div>
                    </div>
                    <p className="text-lg mb-2">Cost for Two: {costForTwo / 100}</p>
                    <p className="text-lg mb-2">{cuisines.join(", ")}</p>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <h2 className="text-xl font-bold mb-2">Menu</h2>
            </div>
            <div>
                {categories.map(category => (
                    <RestaurantCategory key={category.card.card.id} data={category.card.card} />
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;




