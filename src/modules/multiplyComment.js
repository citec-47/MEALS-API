import getOurdata from './mealsOfList.js';
import comentz from './coment.js';
import countin from './countinComent.js';

const mealBody = document.getElementById('body');

const getOrders = async (id) => {
  const dataframe = await getOurdata();
  const xcon = dataframe.splice(0);
  const filters = xcon.filter((b) => parseInt(b.id, 10) === id);
  return filters[0].cookinginstruction;
};

const loadInfor = async (id) => {
  const fetchdata = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments?item_id=${id}`,
  );
  const dataInfor = fetchdata.json();
  return dataInfor.then((data) => data);
};

const commentMulitply = async (id, name, category, images, origin, shs) => {
  const s = await loadInfor(id);

  const Instruction = await getOrders(id);
  const popinup = document.createElement('div');
  popinup.setAttribute('class', 'popinup');
  popinup.setAttribute('id', 'popup');

  const largePopup = document.createElement('div');
  largePopup.setAttribute('class', 'upperpopup');

  const largePopupStructure = document.createElement('figure');
  largePopupStructure.setAttribute('class', 'upperpopup_figure');

  const pictures = document.createElement('img');
  pictures.setAttribute('src', `${images}`);
  pictures.setAttribute('id', 'legendimage');
  pictures.setAttribute('class', 'pictures_u');
  pictures.setAttribute('alt', 'pictures');
  pictures.setAttribute('width', '250');

  largePopupStructure.appendChild(pictures);

  const closeX = document.createElement('a');
  closeX.setAttribute('href', '#');
  closeX.setAttribute('class', 'close_container');
  closeX.setAttribute('id', 'close');

  const closesvg = document.createElement('i');
  closesvg.setAttribute('class', 'lni lni-close close');

  closeX.appendChild(closesvg);

  largePopup.appendChild(largePopupStructure);
  largePopup.appendChild(closeX);

  const averagepopup = document.createElement('div');
  averagepopup.setAttribute('class', 'middlepopup');

  const averagepopTitles = document.createElement('div');
  averagepopTitles.setAttribute('class', 'middlepop_simple_titles');

  const headerthree = document.createElement('h3');
  headerthree.setAttribute('class', 'detail');
  headerthree.innerText = 'Name: ';

  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'detail_p');
  paragraph.innerText = `${name}`;
  headerthree.appendChild(paragraph);

  const headerthreeB = document.createElement('h3');
  headerthreeB.setAttribute('class', 'detail');
  headerthreeB.innerText = 'Category: ';

  const paratwo = document.createElement('p');
  paratwo.setAttribute('class', 'detail_p');
  paratwo.innerText = `${category}`;
  headerthreeB.appendChild(paratwo);

  const headinthree = document.createElement('h3');
  headinthree.setAttribute('class', 'detail');
  headinthree.innerText = 'Origin: ';

  const parathree = document.createElement('p');
  parathree.setAttribute('class', 'detail_p');
  parathree.innerText = `${origin}`;
  headinthree.appendChild(parathree);

  averagepopTitles.appendChild(headerthree);
  averagepopTitles.appendChild(headerthreeB);
  averagepopTitles.appendChild(headinthree);

  const averagepopupdetail = document.createElement('article');
  const headerfour = document.createElement('h3');
  headerfour.setAttribute('class', 'detail2');
  headerfour.innerText = 'Instruction';

  const parafor4 = document.createElement('p');
  parafor4.setAttribute('class', 'detail_p');
  parafor4.innerText = `${Instruction}`;

  averagepopupdetail.appendChild(headerfour);
  averagepopupdetail.appendChild(parafor4);
  averagepopup.appendChild(averagepopTitles);
  averagepopup.appendChild(averagepopupdetail);

  const popupCommentdetails = document.createElement('article');
  const heaDafiver = document.createElement('h3');
  heaDafiver.setAttribute('class', 'detail detail3');
  heaDafiver.innerText = '';
  countin(heaDafiver, s);
  popupCommentdetails.appendChild(heaDafiver);

  const commentKeper = document.createElement('div');
  commentKeper.setAttribute('class', 'comment_holder');
  popupCommentdetails.appendChild(commentKeper);
  comentz(commentKeper, s);

  const popForms = document.createElement('form');
  popForms.setAttribute('class', 'popup_form');
  popForms.setAttribute('id', 'form');
  const headasix = document.createElement('h3');
  headasix.setAttribute('class', 'detail detail4');
  headasix.innerText = 'Add a Comment';
  const username = document.createElement('input');
  username.setAttribute('name', 'username');
  username.setAttribute('class', 'detail_p');
  username.setAttribute('id', 'username');
  username.setAttribute('minlength', '5');
  username.setAttribute('placeholder', 'Your name');
  username.setAttribute('required', true);
  username.setAttribute('type', 'text');
  const innerpart = document.createElement('input');
  innerpart.setAttribute('name', 'innerpart');
  innerpart.setAttribute('class', 'detail_p');
  innerpart.setAttribute('value', ' ');
  innerpart.setAttribute('id', 'innerpart');
  innerpart.setAttribute('minlength', '1');
  innerpart.setAttribute('placeholder', 'Your name');
  innerpart.setAttribute('required', true);
  innerpart.setAttribute('type', 'text');
  const formButon = document.createElement('button');
  formButon.setAttribute('type', 'submit');
  formButon.setAttribute('class', 'button1');
  formButon.setAttribute('id', 'comment');
  formButon.innerText = 'Comment';

  popForms.appendChild(headasix);
  popForms.appendChild(username);
  popForms.appendChild(innerpart);
  popForms.appendChild(formButon);

  popinup.appendChild(largePopup);
  popinup.appendChild(averagepopup);
  popinup.appendChild(popupCommentdetails);
  popinup.appendChild(popForms);

  mealBody.appendChild(popinup);

  closeX.addEventListener('click', (e) => {
    e.preventDefault();
    const newpopup = document.getElementById('popup');
    newpopup.classList.remove('popup2');
    mealBody.innerHTML = '';
    document.body.classList.remove('body-y-scroll');
  });

  const formId = document.getElementById('form');
  formId.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formfetch = await fetch(shs, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: formId.username.value,
        comment: formId.innerpart.value,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const Ourstatu = formfetch.status;
    if (Ourstatu === 201) {
      commentKeper.innerHTML = '';
      heaDafiver.innerHTML = '';
      document.getElementById('form').reset();
      const p = await loadInfor(id);
      comentz(commentKeper, p);
      countin(heaDafiver, p);
    }
  });
};
export default commentMulitply;
