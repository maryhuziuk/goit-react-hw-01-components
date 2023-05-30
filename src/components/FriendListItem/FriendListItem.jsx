import PropTypes from "prop-types";
import { FriendListItemContainer, FriendsStatus, FriendsAvatar, FriendsName} from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <FriendListItemContainer>
        <FriendsStatus isOnline={isOnline} />
        <FriendsAvatar src={avatar} alt="User avatar" width="48" />
        <FriendsName>{name}</FriendsName>
      </FriendListItemContainer>
    );
};
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
      
 