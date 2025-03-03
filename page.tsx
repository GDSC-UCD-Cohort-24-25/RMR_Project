import { NavButton } from './components/NavButton';
import { RestaurantList } from './components/RestaurantList';

export default function RestaurantPage() {
  return (
    <div className="flex overflow-hidden flex-col pt-5 pb-64 bg-white max-md:pb-24">
      <header className="flex flex-wrap gap-5 justify-between ml-3.5 w-full max-w-[1330px] max-md:max-w-full">
        <div className="flex gap-3 text-3xl font-medium tracking-tight leading-none text-lime-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/800f8f03f63ea87b48a9b372ad6508cca0afa86b3a36c3388a6b03a404277370?placeholderIfAbsent=true&apiKey=06b242cc5f094243a48af7e24ba49b66"
            alt="UC Davis logo"
            className="object-contain shrink-0 aspect-[0.97] w-[70px]"
          />
          <div className="my-auto basis-auto">
            <span className="text-sky-950">UC</span>
            <span className="text-yellow-400">Davis</span>
          </div>
        </div>
        <nav className="flex gap-10 items-center my-auto text-base leading-tight text-center text-black">
          <button className="self-stretch my-auto">Most Popular</button>
          <button className="self-stretch my-auto">Profile</button>
          <button className="overflow-hidden self-stretch px-9 py-3.5 font-semibold text-white whitespace-nowrap rounded-lg bg-stone-900 max-md:px-5">
            Sign-in
          </button>
        </nav>
      </header>

      <main className="flex overflow-hidden flex-col items-center px-20 pt-14 mt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1248px] max-md:max-w-full">
          <h1 className="text-6xl tracking-tighter leading-tight text-black max-md:max-w-full max-md:text-4xl">
            RateMyResturant
          </h1>
          <div className="flex gap-5 items-start my-auto">
            <NavButton label="Filter" />
            <NavButton label="Search" variant="filled" />
          </div>
        </div>
        <div className="shrink-0 mt-4 max-w-full h-0 border-2 border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[1248px]" />
      </main>

      <section className="self-center mt-20 w-full max-w-[1248px] max-md:mt-10 max-md:max-w-full">
        <RestaurantList />
      </section>
    </div>
  );
}