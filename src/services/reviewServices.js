import axios from 'axios';

const reviewServices = (page, sortBy) => axios
  .get(`/${page}/?sort=${sortBy}`)
  .then(res => res.data);

export default reviewServices;
