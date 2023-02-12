import { usePagination } from 'components/hooks';
import './pagination.css';

const Pagination = () => {
  const [next, previous, onNextClick, onPreviousClick] = usePagination();

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