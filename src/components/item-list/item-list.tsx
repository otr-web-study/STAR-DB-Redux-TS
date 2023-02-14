import { useListData, useItemNavigate } from '../hooks';
import Spinner from '../spinner';
import { RenderName, RenderClassAndName, RenderModelAndName, AllItems } from 'types';
import { LoadPeopleAction } from 'futures/people/people-actions';
import { SelectPeopleListState } from 'futures/people/people-selectors';
import { LoadPlanetsAction } from 'futures/planets/planet-actions';
import { SelectPlanetListState } from 'futures/planets/planet-selectors';
import { LoadStarshipsAction } from 'futures/starships/starship-actions';
import { SelectStarshipListState } from 'futures/starships/starship-selector';
import { LoadVehiclesAction } from 'futures/vehicles/vehicle-actions';
import { SelectVehicleListState } from 'futures/vehicles/vehicle-selector';
import './item-list.css';



function ItemList({actionCreator, selector, renderItem}: {
  actionCreator: LoadPeopleAction,
  selector: SelectPeopleListState,
  renderItem: RenderName,
}): JSX.Element;
function ItemList({actionCreator, selector, renderItem}: {
  actionCreator: LoadPlanetsAction,
  selector: SelectPlanetListState,
  renderItem: RenderName,
}): JSX.Element;
function ItemList({actionCreator, selector, renderItem}: {
  actionCreator: LoadStarshipsAction,
  selector: SelectStarshipListState,
  renderItem: RenderModelAndName,
}): JSX.Element;
function ItemList({actionCreator, selector, renderItem}: {
  actionCreator: LoadVehiclesAction,
  selector: SelectVehicleListState,
  renderItem: RenderClassAndName,
}): JSX.Element;
function ItemList({ actionCreator, selector, renderItem }: {
  actionCreator: any,
  selector: any,
  renderItem: any
}) {
  const [ itemList, status ] = useListData(actionCreator, selector);
  const [onItemSelected] = useItemNavigate();

  const renderItems = (arr: AllItems[]) => arr.map((item) => {
    const { id } = item;

    const label = renderItem(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  });

  const spinner = status === 'loading' ? <Spinner /> : null;
  const content = status === 'received' && itemList ? renderItems(itemList as AllItems[]) : null

  return (
    <ul className="item-list list-group">
      {spinner}
      {content}
    </ul>
  );
}

export default ItemList;