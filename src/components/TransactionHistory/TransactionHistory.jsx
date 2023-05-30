import PropTypes from "prop-types";
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
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };