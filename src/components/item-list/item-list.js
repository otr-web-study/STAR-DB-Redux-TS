import { useListData } from '../hooks';

import Spinner from '../spinner';

import './item-list.css';

const ItemList = ({ getData, onItemSelected, renderItem, onDataLoaded }) => {
  const [itemList] = useListData(getData, onDataLoaded);

  const renderItems = (arr) => arr.map(({ id, ...item }) => {
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