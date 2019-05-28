import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, batch } from 'react-redux';
import { groupBy, orderBy, debounce, delay, isEmpty } from 'lodash';

import { formatTitle, isReviewMatch, groupByIterator, smoothScrollToPosition } from '../../helpers/util';
import { loadReviews, resetReviews } from '../../redux/actions';

import { Spinner, GeneralContiner, StyledButton } from '../base';
import { ReviewsMainWrapper } from './Reviews.styled';
import ReviewGroup from '../ReviewGroup';
import ReviewFilter from '../ReviewFilter/ReviewFilter';


/**
 * `Reviews` component responsible to load and render respective reviews
 */
class Reviews extends Component {
  /**
   * @property {<Redux.Action>} props.loadReview - action that load reviews from API
   * @property {<Redux.Action>} props.resetReviews - action that clear the reviews
   * @property {boolean} props.hasMore - indicates thats need to load more reviews or not
   * @property {boolean} props.loading - indicates thats loading is in progress or not
   * @property {Array<Object>} props.reviews - list of reviews
   */
  static propTypes = {
    hasMore: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadReviews: PropTypes.func.isRequired,
    resetReviews: PropTypes.func.isRequired,
  }

  // UI state maintained in component state
  state = {
    search: '',
    stars: 5,
    groupBy: 'day',
    sortBy: 'desc',
  }

  componentDidMount() {
    this.props.loadReviews(this.props.page, this.state.sortBy);
    window.addEventListener('scroll', this.handleScrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolling);
  }

  handleScrolling = () => {
    const { loading, hasMore } = this.props;

    if (loading || !hasMore) {
      return;
    }

    const lastChild = document.querySelector('div.reviews > div.review:last-child') || {};
    const lastIssueOffset = (lastChild.offsetTop + lastChild.clientHeight) - 300;
    const windowOffset = window.pageYOffset + window.innerHeight;

    if ((windowOffset > lastIssueOffset) || isEmpty(lastChild)) {
      this.props.loadReviews(this.props.page + 1, this.state.sortBy);
    }
  }

  handleRefresh = () => {
    this.setState({ sortBy: 'desc' });

    debounce(() => {
      const firstPage = 1;

      batch(() => {
        this.props.resetReviews();
        this.props.loadReviews(firstPage, this.state.sortBy);
      });

      delay(this.handleScrolling, 500);
    }, 300)();
  }

  handleFilters = filter => {
    this.setState(filter);

    delay(() => {
      this.handleScrolling();
      smoothScrollToPosition(0);
    }, 200);
  }

  renderReviews = () => {
    const { stars, groupBy: group, sortBy, search } = this.state;

    const filteredReviews = this.props.reviews
      .filter(review => review.stars === stars)
      .filter(review => !search || isReviewMatch(review, search));

    const groupedReviews = groupBy(filteredReviews, groupByIterator(group));
    const groupTitles = orderBy(Object.keys(groupedReviews), groupTitle => new Date(groupTitle), sortBy);

    if (groupTitles.length === 0) {
      this.handleScrolling();
      return;
    }

    return groupTitles.map(groupTitle => (
      <ReviewGroup
        key={groupTitle}
        groupTitle={formatTitle(groupTitle, group)}
        reviews={orderBy(groupedReviews[groupTitle], ({ reviewCreated }) => new Date(reviewCreated), sortBy)}
      />
    ));
  }

  render() {
    return (
      <ReviewsMainWrapper className="reviews">
        <ReviewFilter
          onChange={this.handleFilters}
          {...this.state}
          diableSort={this.props.hasMore}
        />
        <GeneralContiner css={`min-height: 0; justify-content: flex-end;`}>
          <StyledButton
            onClick={this.handleRefresh}
            type="button"
            value="Refresh"
            css={`position: absolute; margin-top: 15px;`}
          >
            {'Refresh'}
          </StyledButton>
        </GeneralContiner>
        {this.renderReviews()}
        {this.props.loading && <GeneralContiner><Spinner /></GeneralContiner>}
      </ReviewsMainWrapper>
    )
  }
}

export default connect(state => state, { loadReviews, resetReviews })(Reviews);
