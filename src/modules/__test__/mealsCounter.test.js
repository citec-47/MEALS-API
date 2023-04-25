// eslint-disable-next-line import/extensions
import mealsCounter from '../mealCount';

describe('Test Counting', () => {
  test('0 DOM elements for meals should equal to 0', () => {
    // Arrange
    document.body.innerHTML = `
      <ul class="f-list | row list-unstyled mt-5 p-5 mx-auto"></ul>
    `;
    const mealsChoice = document.getElementsByClassName('meal-card');

    // Act
    const mealCont = mealsCounter([...mealsChoice]);

    // Assert
    expect([...mealsChoice][0]).toBeFalsy();
    expect(mealCont).toBe(0);
  });

  test('9 DOM elements for meals should equal to 9', () => {
    // Arrange
    document.body.innerHTML = `
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
    `;
    const mealsChoice = document.getElementsByClassName('meal-card');

    // Act
    const mealCont = mealsCounter([...mealsChoice]);

    // Assert
    expect([...mealsChoice][0]).toBeTruthy();
    expect(mealCont).toBe(9);
  });
});
