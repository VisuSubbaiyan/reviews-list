import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { ReviewFilterContainer, StyledReviewFilter } from './ReviewFilter.styled';
import { TextInput, Select } from '../base';
import { groupByOptions, sortByOptions, filterOptions } from '../../helpers/util';

const ReviewFilter = ({ onChange, search, groupBy, sortBy, stars, diableSort }) => {
  const handleOnChange = name => value => {
    onChange({ [name]: name === 'stars' ? Number(value) : value });
  };

  const css = `width: 32%; margin: 7px 0;`;
  return (
    <ReviewFilterContainer>
      <StyledReviewFilter>
        <TextInput
          onChange={debounce(handleOnChange('search'), 300)}
          value={search}
          placeholder="Search reviews"
          css={`margin: 7px 0; padding: 5px 10px;`}
        />
        <Select
          onChange={handleOnChange('groupBy')}
          options={groupByOptions}
          selected={groupBy}
          css={css}
        />
        <Select
          onChange={handleOnChange('stars')}
          options={filterOptions}
          selected={stars}
          css={css}
        />
        <Select
          onChange={handleOnChange('sortBy')}
          options={sortByOptions}
          selected={sortBy}
          disabled={diableSort}
          css={css}
        />
      </StyledReviewFilter>
    </ReviewFilterContainer>
  );
};

ReviewFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  search: PropTypes.string,
  groupBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  diableSort: PropTypes.bool.isRequired
};

export default React.memo(ReviewFilter);
