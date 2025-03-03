import Link from 'next/link';
import { RestaurantCardProps } from '../types';

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id, // Ensure the id prop is passed
  name,
  rating,
  address,
  menuAvailable,
  imageUrl,
}) => {
  return (
    <Link href={`/restaurant/${id}`}> {/* Corrected href */}
      <div className="flex overflow-hidden flex-col pb-7 w-full rounded-3xl border-2 border-black border-solid bg-neutral-700 cursor-pointer">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`${name} restaurant exterior`}
          className="object-contain w-full aspect-[1.3] rounded-[31px]"
        />
        <div className="flex flex-col px-6 mt-4 w-full max-md:px-5">
          <div className="flex gap-10 text-xl font-semibold leading-tight">
            <div className="flex flex-col flex-1">
              <div className="text-white">{name}</div>
              {menuAvailable && (
                <div className="self-start mt-1 text-yellow-200">Menu</div>
              )}
            </div>
            <div className="self-start text-purple-200 text-opacity-70">
              Rating: {rating}
            </div>
          </div>
          <div className="self-start mt-4 text-base text-neutral-500">
            {address}
          </div>
        </div>
      </div>
    </Link>
  );
};