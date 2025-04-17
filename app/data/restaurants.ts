export interface Restaurant {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  imageUrl: string;
  menuAvailable: boolean;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Ali Baba",
    category: "Middle Eastern",
    address: "220 3rd St",
    rating: 4.6,
    imageUrl: "/images/restaurants/ali-baba.jpg",
    menuAvailable: true
  },
  {
    id: "2",
    name: "Beach Hut Deli",
    category: "Deli",
    address: "4515 Fermi Pl",
    rating: 4.3,
    imageUrl: "/images/restaurants/beach-hut-deli.jpg",
    menuAvailable: true
  },
  {
    id: "3",
    name: "Black Bear Diner",
    category: "American",
    address: "255 2nd St",
    rating: 4.5,
    imageUrl: "/images/restaurants/black-bear-diner.jpg",
    menuAvailable: true
  },
  {
    id: "4",
    name: "Burgers and Brew",
    category: "American",
    address: "403 3rd St",
    rating: 4.4,
    imageUrl: "/images/restaurants/burgers-and-brew.jpg",
    menuAvailable: true
  },
  {
    id: "5",
    name: "Cafe Bernardo",
    category: "American",
    address: "234 D St",
    rating: 4.3,
    imageUrl: "/images/restaurants/cafe-bernardo.jpg",
    menuAvailable: true
  },
  {
    id: "6",
    name: "Carl's Jr.",
    category: "Fast Food",
    address: "1701 Cowell Blvd",
    rating: 3.8,
    imageUrl: "/images/restaurants/carls-jr.jpg",
    menuAvailable: true
  },
  {
    id: "7",
    name: "Cenario's Pizza",
    category: "Pizza",
    address: "2561 E Covell Blvd",
    rating: 4.2,
    imageUrl: "/images/restaurants/cenarios-pizza.jpg",
    menuAvailable: true
  },
  {
    id: "8",
    name: "Chipotle",
    category: "Mexican",
    address: "227 E St",
    rating: 4.2,
    imageUrl: "/images/restaurants/chipotle.jpg",
    menuAvailable: true
  },
  {
    id: "9",
    name: "Common Grounds",
    category: "Cafe",
    address: "2171 Cowell Blvd Ste F",
    rating: 4.5,
    imageUrl: "/images/restaurants/common-grounds.jpg",
    menuAvailable: true
  },
  {
    id: "10",
    name: "Crepeville",
    category: "American",
    address: "330 3rd St",
    rating: 4.5,
    imageUrl: "/images/restaurants/crepeville.jpg",
    menuAvailable: true
  }
]; 