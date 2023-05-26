import styled from '@emotion/styled';

export const Table = styled.table`
     overflow: hidden;
    text-transform: capitalize;
    
    width: 60%;

    margin-left: 300px;
    margin-bottom: 20px;

    background: rgba(142, 227, 212, 0.22);
    
    border-spacing: 0;
    border-radius: 18px;
`;

export const TableHead = styled.thead`
  font-size: 16px;
    line-height: 1.18;
        
    background-color: #13D4B4;
`;

export const TableHeadRow = styled.tr`
  text-align: left;
`;

export const TableHeadCell = styled.th`
  padding: 12px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

export const TableBody = styled.tbody``;

export const TableDataRow = styled.tr``;

export const TableDataCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;


export const TransactionTable = styled.table`
    overflow: hidden;
    text-transform: capitalize;
    
    width: 100%;

    margin-left: 16px;
    margin-bottom: 20px;

    background: rgba(142, 227, 212, 0.22);
    
    border-spacing: 0;
    border-radius: 18px;

    @media screen and (max-width: 424.98px){
        width: 300px;
        margin: auto;
    }
`
