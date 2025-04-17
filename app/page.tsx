'use client';
import * as React from 'react';
import { NavButton } from './components/NavButton';
import { RestaurantList } from './components/RestaurantList';
import { Header } from './components/Header';
import { restaurants } from './data/restaurantData';

export default function RestaurantPage() {
  const [showFilters, setShowFilters] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  // Get unique categories from restaurant data
  const categories = React.useMemo(() => {
    const uniqueCategories = new Set(restaurants.map(restaurant => restaurant.type));
    return Array.from(uniqueCategories).sort();
  }, []);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleApplyFilters = () => {
    setShowFilters(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-20">
        <div className="w-full max-w-4xl text-center py-14">
          <h1 className="nothing-you-could-do-regular text-6xl font-bold tracking-tighter text-black mb-4">
            RateMyRestaurant
          </h1>
          <div className="w-full h-0.5 bg-black/20 shadow-sm" />
        </div>

        {/* Search and Filters */}
        <div className="w-full max-w-2xl mb-12 flex gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search restaurants..."
              className="w-full px-6 py-4 text-lg bg-neutral-700 text-white rounded-3xl border-2 border-black border-solid focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-transparent placeholder:text-gray-400"
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-200 hover:text-yellow-300 transition-colors duration-200"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-4 text-lg font-semibold text-yellow-200 bg-neutral-700 rounded-3xl border-2 border-black border-solid transition-all duration-300 hover:bg-neutral-600 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.6)]"
          >
            Filters
          </button>
        </div>

        {/* Filters Popup */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-neutral-700 p-6 rounded-3xl border-2 border-black border-solid max-w-lg w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-yellow-200">Filter by Category</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-yellow-200 hover:text-yellow-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-xl border-2 border-black border-solid transition-all duration-200 ${
                      selectedCategories.includes(category)
                        ? 'bg-yellow-200 text-neutral-700'
                        : 'bg-neutral-700 text-yellow-200 hover:bg-neutral-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={() => setSelectedCategories([])}
                  className="px-4 py-2 text-yellow-200 hover:text-yellow-300"
                >
                  Clear All
                </button>
                <button
                  onClick={handleApplyFilters}
                  className="px-4 py-2 bg-yellow-200 text-neutral-700 rounded-xl border-2 border-black border-solid hover:bg-yellow-300"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Restaurant list */}
        <section className="w-full max-w-6xl mt-1">
          <RestaurantList selectedCategories={selectedCategories} />  
        </section>
      </main>
    </div>
  );
}
      
      
   
