export interface RestaurantCardProps {
  id: string;
  name: string;
  rating: string;
  address: string;
  menuAvailable: boolean;
  imageUrl: string;
}

export interface NavButtonProps {
  label: string;
  variant?: 'default' | 'filled';
  className?: string;
}

export interface MenuItemProps {
  image: string;
  title: string;
  price: string;
  calories?: string;
}

export interface TopPicksProps {
  items: MenuItemProps[];
}
