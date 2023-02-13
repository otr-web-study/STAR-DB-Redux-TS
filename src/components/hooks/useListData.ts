import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'redux-hooks';
import { Selector } from 'store';
import { AllLoadActions } from 'types/actions';
import { Status } from 'types';
import { loadPeople } from "futures/people/people-actions";
import { loadPlanets } from 'futures/planets/planet-actions';
import { loadStarships } from 'futures/starships/starship-actions';
import { loadVehicles } from 'futures/vehicles/vehicle-actions';


const useListData = <T extends AllLoadActions, S extends Selector, U>(
  actionCreator: T,
  selector: S,
  callback?: (data: U[]) => void
): [U[] | undefined, Status] => {
  const { status, items: itemList, currPage }: {
    status: Status, items: U[] | undefined, currPage: string
  } = useAppSelector(selector);
  const dispatch = useAppDispatch();
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
      if (actionCreator === loadPeople) {
        dispatch(loadPeople(page));
      } else if (actionCreator === loadPlanets) {
        dispatch(loadPlanets(page));
      } else if (actionCreator === loadStarships) {
        dispatch(loadStarships(page));
      } else if (actionCreator === loadVehicles) {
        dispatch(loadVehicles(page));
      }
      return
    }

    callback && itemList && callback(itemList);
  }, [itemList, dispatch, actionCreator, callback, page, currPage]);

  return [
    itemList ? itemList : undefined,
    status,
  ];
};

export default useListData;