import styled from '@emotion/styled';

 export const StatisticsContainer = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  max-width: 300px;
  margin: 0 auto;
`;

export const StatisticsTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const StatList = styled.ul`
   display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const StatisticsItem = styled.li`
   display: grid;
    justify-items: center;
    
    padding: 6px;
    :first-of-type{
        border-radius: 12px 0 0 12px;
    }
    :last-child{
        border-radius: 0 12px 12px 0;
    }
`;

export const StatisticsLabel = styled.span`
 font-weight: 400;
    font-size: 12px;
    color: #dcdcd5;
`;

export const StatisticsPercentage = styled.span`
 font-weight: 700;
    font-size: 18px;
    color: #ffffff;
`;