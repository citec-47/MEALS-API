const comentz = (comm, data) => {
  comm.innerHTML = '';
  if (data.error) {
    data = [];
  }
  data.map((datd) => {
    const commentDate = document.createElement('div');
    commentDate.setAttribute('class', 'date_comment');
    const head3 = document.createElement('b');
    head3.setAttribute('class', 'detail_p');
    head3.innerText = `${datd.creation_date}`;
    const para3 = document.createElement('p');
    para3.setAttribute('class', 'detail_p');
    para3.innerText = `${datd.username}: ${datd.comment}`;
    commentDate.appendChild(head3);
    commentDate.appendChild(para3);
    comm.appendChild(commentDate);

    return null;
  });
};

export default comentz;