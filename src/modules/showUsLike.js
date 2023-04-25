// eslint-disable-next-line import/extensions
import { getinLikes } from './fetchingLikes';

const showinlikes = async (txtLike) => {
  const mealsIds = txtLike.getAttribute('data-id');
  const likesListlive = await getinLikes();
  const numberOfLikes = likesListlive.filter(
    (likeObj) => likeObj.item_id === mealsIds,
  );
  if (numberOfLikes.length > 0) {
    txtLike.textContent = `${numberOfLikes[0].likes} Likes`;
  }
};

export default showinlikes;
