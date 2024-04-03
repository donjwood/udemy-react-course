export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meals Details</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
