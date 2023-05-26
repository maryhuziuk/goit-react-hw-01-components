import PropTypes from "prop-types";
import { transactions } from "./transactions";
import {Table, TableHead, TableHeadRow, TableHeadCell, TableBody, TableDataRow, TableDataCell  } from "./TransactionHistory.styled"





export const TransactionHistory = ({ items }) => {
    return (
      <Table className="transaction-history">
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Amount</TableHeadCell>
            <TableHeadCell>Currency</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <TableDataRow key={item.id}>
              <TableDataCell>{item.type}</TableDataCell>
              <TableDataCell>{item.amount}</TableDataCell>
              <TableDataCell>{item.currency}</TableDataCell>
            </TableDataRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  
  
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape(
        {
          type: PropTypes.string,
          amount: PropTypes.number,
          currency: PropTypes.string
        }
    )) 
}