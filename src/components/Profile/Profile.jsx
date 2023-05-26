import PropTypes from 'prop-types';

import {ProfileContainer, DescriptionContainer, Avatar, Name, Tag, Location, StatsList, StatItem, Label, Quantity} from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;

    return (
      <ProfileContainer>
        <DescriptionContainer>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </DescriptionContainer>
  
        <StatsList>
          <StatItem>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatItem>
          <StatItem>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatItem>
          <StatItem>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatItem>
        </StatsList>
      </ProfileContainer>
    );  
} 
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};