/* eslint-disable import/extensions */
/* eslint-disable quotes */
import "./style.css";
import viewMeals from "./modules/showMeals";
import { addinLikes } from "./modules/fetchingLikes";
import showinlikes from "./modules/showUsLike";
import mealsCounter from "./modules/mealCount";
import commentMulitply from "./modules/multiplyComment.js";

// Constants
const urls = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments";
const mealsListContainer = document.querySelector(".f-list");

// Populate the meals cards items
document.addEventListener("DOMContentLoaded", async () => {
  await viewMeals(mealsListContainer);
  // Selecet meals items
  const meals = document.getElementsByClassName("meal-card");
  const counterContentText = document.querySelector(".meals-counts");
  counterContentText.textContent = mealsCounter([...meals]);
  // Select all likes element
  const textLikes = document.getElementsByClassName("card-likes-txt");
  [...textLikes].forEach(async (textLike) => {
    await showinlikes(textLike);
  });
});

// Post Likes
window.addEventListener("click", async (e) => {
  // Select the like button
  const likeBtn = e.target;
  if (likeBtn.classList.contains("card-likes")) {
    // Update numbers of likes on the API
    const mealId = likeBtn.getAttribute("data-id");
    await addinLikes(mealId);
    // Update numbers of likes on the screen
    const txtlike = likeBtn.parentElement.previousElementSibling.lastChild.previousSibling;
    await showinlikes(txtlike);
  }
});

const handleCommentClick = async (meals) => {
  const [id, name, category, image, origin] = meals;
  await commentMulitply(id, name, category, image, origin, urls);
  const thepopup = document.getElementById("popup");
  document.body.classList.add("body-y-scroll");
  thepopup.classList.add("popup2");
};

window.handleCommentClick = handleCommentClick;
