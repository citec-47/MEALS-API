import { URL_API, getUsFoodList } from './fetchingMeals.js';
// Using getFoodList function //
const getOurdata = async () => {
  // create an empty array
  const dataz = [];
  // awit api data
  const foodListType = await getUsFoodList(URL_API);
  // loop to get individual data and populate important data to our array
  foodListType.forEach((mealstext) => {
    const newarray = {
      id: mealstext.idMeal,
      name: mealstext.strMeal,
      image: mealstext.strMealThumb,
      category: mealstext.strCategory,
      origin: mealstext.strArea,
      cookinginstruction: mealstext.strInstructions,
    };
    dataz.push(newarray);
  });
  return dataz;
};

export default getOurdata;
