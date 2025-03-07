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

export interface LogoProps {
  imageUrl: string;
}

export interface NavLinkProps {
  text: string;
  isButton: boolean;
  onClick?: () => void;  // Add this
  className?: string;    // Add this
}

export interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
}
