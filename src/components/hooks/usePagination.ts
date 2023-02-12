import { useParams, useNavigate } from 'react-router-dom';

import { useAppSelector } from 'redux-hooks';
import { selectPlanetPagination } from 'futures/planets/planet-selectors';

const usePagination = (): [boolean, boolean, () => void, () => void] => {
  const { next, previous, currPage } = useAppSelector(selectPlanetPagination);
  const navigate = useNavigate();
  const { id } = useParams();
  const page = parseInt(currPage);

  const onNextClick = () => {
    console.log('click')
    if (!next) {
      return;
    }
    if (id) {
      navigate(`../../${page + 1}`)
    } else {
      navigate(`../${page + 1}`);
    }
  }

  const onPreviousClick = () => {
    if (!previous) {
      return;
    }

    if (id) {
      navigate(`../../${page - 1}`)
    } else {
      navigate(`../${page - 1}`);
    }
  }

  return [next, previous, onNextClick, onPreviousClick];
}

export default usePagination;