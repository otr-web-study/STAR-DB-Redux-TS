import { useListData, useItemNavigate } from '../hooks';
import { AllItems } from 'types/items';
import { AllLoadActions } from 'types/actions';
import Spinner from '../spinner';
import { RenderFunction } from 'components/sw-components/item-lists';
import { Selector } from 'store';
import './item-list.css';

type ItemListProps<T, S> = {
  actionCreator: T,
  selector: S,
  renderItem: RenderFunction,
};

const ItemList = <
  T extends AllLoadActions, S extends Selector, U extends AllItems
>({ actionCreator, selector, renderItem }: ItemListProps<T, S>) => {
  const [ itemList, status ] = useListData<T, S, U>(actionCreator, selector);
  const [onItemSelected] = useItemNavigate();

  const renderItems = (arr: U[]) => arr.map((item) => {
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
  const content = status === 'received' && itemList ? renderItems(itemList) : null

  return (
    <ul className="item-list list-group">
      {spinner}
      {content}
    </ul>
  );
}

export default ItemList;