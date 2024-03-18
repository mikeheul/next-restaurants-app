import RestaurantPage from "./components/RestaurantPage";

export const getRestaurants = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Restaurants", {
      cache: "no-store"
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get restaurants", error);
  }
};

export default async function Home() {

  const { restaurants } = await getRestaurants();
  return (
    <>
      <h1 className="xl:text-3xl lg:text-2xl md:text-xl mb-5 dark:text-white text-black">Restaurants ({restaurants.length})</h1>
      <RestaurantPage
        restaurants={restaurants}
      ></RestaurantPage>
    </>
  );
}
