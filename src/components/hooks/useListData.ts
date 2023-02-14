import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'redux-hooks';
import { Person, Planet, Starship, Status, Vehicle } from 'types';
import { LoadPeopleAction } from "futures/people/people-actions";
import { LoadPlanetsAction } from 'futures/planets/planet-actions';
import { LoadStarshipsAction } from 'futures/starships/starship-actions';
import { LoadVehiclesAction } from 'futures/vehicles/vehicle-actions';
import { selectPeopleListState, SelectPeopleListState } from 'futures/people/people-selectors';
import { selectPlanetListState, SelectPlanetListState } from 'futures/planets/planet-selectors';
import { selectStarshipListState, SelectStarshipListState } from 'futures/starships/starship-selector';
import { selectVehicleListState, SelectVehicleListState } from 'futures/vehicles/vehicle-selector';

type AllListStates = ReturnType<typeof selectPeopleListState> |
                     ReturnType<typeof selectPlanetListState> |
                     ReturnType<typeof selectStarshipListState> |
                     ReturnType<typeof selectVehicleListState>;


function useListData(
  actionCreator: LoadPeopleAction,
  selector: SelectPeopleListState,
  callback?: (data: Person[]) => void,
): [Person[] | undefined, Status];
function useListData(
  actionCreator: LoadPlanetsAction,
  selector: SelectPlanetListState,
  callback?: (data: Planet[]) => void,
): [Planet[] | undefined, Status];
function useListData(
  actionCreator: LoadStarshipsAction,
  selector: SelectStarshipListState,
  callback?: (data: Starship[]) => void,
): [Starship[] | undefined, Status];
function useListData(
  actionCreator: LoadVehiclesAction,
  selector: SelectVehicleListState,
  callback?: (data: Vehicle[]) => void,
): [Vehicle[] | undefined, Status];
function useListData(
  actionCreator: any,
  selector: any,
  callback?: (data: any[]) => void
): [any[] | undefined, Status] {
  const { status, items: itemList, currPage }:AllListStates = useAppSelector(selector);
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
      dispatch(actionCreator(page));
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