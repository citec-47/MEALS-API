import counter from '../countinComent.js';

describe('counter tests', () => {
  test('test counter', () => {
    // arrange
    const dataTest = [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },
    ];
    const header3 = document.createElement('h3');
    // act
    counter(header3, dataTest);
    // assert
    expect(header3.innerHTML).not.toBe('');
  });
});
