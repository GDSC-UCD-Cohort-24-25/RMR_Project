import { RestaurantDetails } from '../../components/RestaurantDetails';
import { restaurants } from '../../data/restaurantData';

interface RestaurantDetailPageProps {
  params: {
    id: string;
  };
}

export default function RestaurantDetailPage({ params }: RestaurantDetailPageProps) {
  const restaurant = restaurants.find((r) => r.id === params.id);

  if (!restaurant) {
    return <div className="flex items-center justify-center min-h-screen">Restaurant not found.</div>;
  }

  return <RestaurantDetails restaurant={restaurant} />;
}
