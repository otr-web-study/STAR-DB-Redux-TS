import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'redux-hooks';
import { Selector } from 'store';
import { LoadPlanetsAction } from 'futures/planets/planet-actions';


const useListData = <T extends LoadPlanetsAction, S extends Selector, U>(
  actionCreator: T,
  selector: S,
  callback?: (data: U[]) => void
): [U[] | undefined] => {
  const itemList: U[] | undefined = useAppSelector(selector);
  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.planets.currPage);
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(!page) {
      navigate('1');
    }
  }, [page, navigate])

  useEffect(() => {
    const needDispatch = (page && (!itemList || page !== currPage));
    if (needDispatch) {
      dispatch(actionCreator(page));
      return
    }

    callback && itemList && callback(itemList);
  }, [itemList, dispatch, actionCreator, callback, page, currPage]);

  return [itemList ? itemList : undefined];
};

export default useListData;