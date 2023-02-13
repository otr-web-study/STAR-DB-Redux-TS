import { usePagination } from 'components/hooks';
import { Selector } from 'store';
import './pagination.css';

const Pagination = <S extends Selector>({ selector }: {selector: S}) => {
  const [next, previous, onNextClick, onPreviousClick] = usePagination<S>(selector);

  return (
    <div className='pagination'>
      <button 
        className='pagination__btn'
        disabled={!previous}
        onClick={onPreviousClick}>
        &lt;
      </button>
      <button 
        className='pagination__btn'
        disabled={!next}
        onClick={onNextClick}>
        &gt;
      </button>
    </div>
  );
}

export default Pagination;