import PropTypes from "prop-types";
import { getRandomColor } from "../../helpers/changeColor";
import { StatisticsContainer, StatisticsTitle, StatList, StatisticsItem, StatisticsLabel, StatisticsPercentage } from "./Statistics.styled";

  

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id} style={{ backgroundColor: getRandomColor () }}>
            <StatisticsLabel>{stat.label}</StatisticsLabel>
            <StatisticsPercentage>{stat.percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
}
  