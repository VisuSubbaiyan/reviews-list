import { css } from 'styled-components';
import { format as formatDate, endOfWeek, startOfWeek, startOfMonth } from 'date-fns';

/** Styled compoenent uitls */
// Based on the number of codes we can move this to seperate file
export const styling = props => props.css && css`${props.css}`;

export const viewport = breakpoint => (...args) => css`
    @media (min-width: ${breakpoint}px) {
      ${css(...args)}
    }
  `;

export const iconSizes = {
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '38px',
};

export const getSize = props => iconSizes[props.size];


/** Reviews component utils */
export const formatTitle = (title, group) => {
  switch (group) {
    case 'week':
      return `${formatDate(title, 'DD.MM')} - ${formatDate(endOfWeek(title), 'DD.MM.YYYY')}`;
    case 'month':
      return formatDate(title, 'MMMM YYYY');
    default:
      return formatDate(title, 'DD MMMM YYYY');
  }
};

export const isTextMatch = (text, match) => {
  const textLowerCase = text.toLowerCase();
  const matchLowerCase = match.toLowerCase();

  return textLowerCase.includes(matchLowerCase);
};

export const isReviewMatch = (review, matchWith) => {
  const { title, content } = review;

  return matchWith && (isTextMatch(title, matchWith) || isTextMatch(content, matchWith));
};

export const groupByIterator = group => review => {
  // GroupBy
  // Day new Date();
  // Week startOfWeek(new Date());
  // Month startOfMonth(new Date());
  const reviewedDate = new Date(review.reviewCreated);

  switch (group) {
    case 'week': {
      return startOfWeek(reviewedDate);
    }
    case 'month': {
      return startOfMonth(reviewedDate);
    }
    default: {
      return reviewedDate;
    }
  }
}

export const sortByOptions = [{ value: 'desc', name: 'Most Recent' }, { value: 'asc', name: 'Older' }];

export const groupByOptions = [
  { value: 'day', name: 'Group by day' },
  { value: 'week', name: 'Group by week' },
  { value: 'month', name: 'Group by month' }
];

export const filterOptions = [
  { value: 5, name: '5 star only' },
  { value: 4, name: '4 star only' },
  { value: 3, name: '3 star only' },
  { value: 2, name: '2 star only' },
  { value: 1, name: '1 star only' }
];

export const smoothScrollToPosition = top => window.scrollTo({
    top,
    behavior: 'smooth',
  });
