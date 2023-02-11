import { useListData } from '../hooks';
import { LoadPlanetsAction } from 'futures/planets/planet-actions';
import { Planet } from 'types';
import Spinner from '../spinner';
import { ItemListProps, RenderFunction } from 'components/sw-components/item-lists';
import { Selector } from 'store';
import './item-list.css';

type ExtItemListProps<T, S> = {
  actionCreator: T,
  selector: S,
  renderItem: RenderFunction,
} & ItemListProps;

const ItemList = <
  T extends LoadPlanetsAction, S extends Selector, U extends Planet
>({ actionCreator, selector, onItemSelected, renderItem }: ExtItemListProps<T, S>) => {
  const [itemList] = useListData<T, S, U>(actionCreator, selector);

  const renderItems = (arr: U[]) => arr.map(({ id, ...item }) => {
    const label = renderItem(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  });

  const spinner = !itemList ? <Spinner /> : null;
  const content = itemList ? renderItems(itemList) : null

  return (
    <ul className="item-list list-group">
      {spinner}
      {content}
    </ul>
  );
}

export default ItemList;