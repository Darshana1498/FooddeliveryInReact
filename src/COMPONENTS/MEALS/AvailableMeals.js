import MealItem from './MEALS_ITEM/MealItem';
import Card from '../UI/CARD/Card';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Maharatrian Dish',
    description: 'Loem hutfg gvfdnjnbhv njbhvh njhjg',
    price: 122.99,
  },
  {
    id: 'm2',
    name: 'Panjabi Dish',
    description: 'Lorem bvgh mnjhgf vgd fffgh vggc vgh specialty!',
    price: 216.5,
  },
  {
    id: 'm3',
    name: 'SouthIndianDish',
    description: 'lorem jhjb wetf rtygi vhgvnb bjhgv bjhghjPure Veg',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Rice',
    description: 'Healthy...and green...',
    price: 118.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    id={meal.id} 
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price} 
    /> 
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

