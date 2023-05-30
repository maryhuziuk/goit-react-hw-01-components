import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendListContainer } from "./FriendList.styled"
    
export const FriendList = ({friends}) => {
    return (
        <FriendListContainer>
          <ul css={{ listStyle: 'none', padding: 0 }}>
            {friends.map(friend => (
              <FriendListItem key={friend.id} {...friend} />
            ))}
          </ul>
        </FriendListContainer>
      );
};
  
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};