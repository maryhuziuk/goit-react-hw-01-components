import styled from '@emotion/styled'


export const ProfileContainer = styled.div`
margin-top: 40px
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
`;

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;

export const Avatar = styled.img`

max-height: 92px;
  border-radius: 50%;
  background: #D9D9D9;
  border: 6px solid #FFFFFF;
`;

export const Name = styled.p`
font-size: 18px;
font-weight: bold;
margin-bottom: 5px;
`;

export const Tag = styled.p`
font-size: 14px;
color: gray;
margin-bottom: 5px;
`;

export const Location = styled.p`
font-size: 14px;
color: gray;
`;

export const StatsList = styled.ul`
list-style: none;
display: flex;
padding: 12px;
margin: 0;
 li{
  display: grid;
  width: 80px;
  justify-items: center;
  :not(:last-child){
    border-right: 1px solid #999999;
  }
 }
`;

export const StatItem = styled.li`
text-align: center;
`;

export const Label = styled.span`
font-size: 14px;
color: gray;
margin-bottom: 5px;
`;

export const Quantity = styled.span`
font-size: 18px;
font-weight: bold;
`;
