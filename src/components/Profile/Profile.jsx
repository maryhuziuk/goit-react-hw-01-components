import PropTypes from 'prop-types';
import { user } from "./user";
import styled from '@emotion/styled'
import { css } from '@emotion/react';

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
            <Quantity>{stats.followers}</Quantity>
          </StatItem>
          <StatItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatItem>
          <StatItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatItem>
        </StatsList>
      </ProfileContainer>
    );  
} 