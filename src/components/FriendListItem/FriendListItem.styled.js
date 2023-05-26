import styled from '@emotion/styled';

export const FriendListItemContainer = styled.li`
display: flex;
align-items: center;
margin-bottom: 16px;
`;

export const FriendsStatus = styled.span`
width: 12px;
height: 12px;
border-radius: 50%;
background-color: ${props => (props.isOnline ? 'green' : 'red')};
margin-right: 8px;
`;

export const FriendsAvatar = styled.img`
margin-right: 16px;
`;

export const FriendsName = styled.p`
font-size: 18px;
font-weight: bold;
`;


