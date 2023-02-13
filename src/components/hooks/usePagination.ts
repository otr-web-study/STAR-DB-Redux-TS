import { useParams, useNavigate } from 'react-router-dom';

import { useAppSelector } from 'redux-hooks';
import { Selector } from 'store';

const usePagination = <S extends Selector>(selector: S): [boolean, boolean, () => void, () => void] => {
  const { next, previous, currPage } = useAppSelector(selector);
  const navigate = useNavigate();
  const { id } = useParams();
  const page = parseInt(currPage);

  const onNextClick = () => {
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