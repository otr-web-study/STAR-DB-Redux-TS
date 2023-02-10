import { Fragment, Children, cloneElement, ReactElement } from 'react';
import { Planet } from 'types';

import './item-details.css';


interface RecordProps {
  label: string,
  field: keyof Planet,
  item: Planet,
}

interface ItemDetailsProps {
  item: Planet, 
  children: ReactElement<ItemViewProps>[],
  image: string,
  onImageError: () => void,
}

interface ItemViewProps extends ItemDetailsProps {}

const Record = ({ item, field, label }: RecordProps) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

const ItemDetails = ({ image, item, onImageError, children }: ItemDetailsProps) => {

  const select = (!item) && (
    <h3 className='item-title'> &lt;-Select item</h3>
  );
  const content = (item) && (
    <ItemView item={item} image={image} onImageError={onImageError}>
      {Children.map(children, (child) => {
        return cloneElement(child, {item});
      })}
    </ItemView>
   );

  return (
    <div className="item-details card">
      {content}
      {select}
    </div>
  )
}

const ItemView = ({ item: { name }, image, children, onImageError }: ItemViewProps) => {
  return (
    <Fragment>
      <img className="item-image"
        src={image}
        alt="item"
        onError={onImageError} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {children}
        </ul>
      </div>
    </Fragment>
  )
}

export default ItemDetails;
export {
  Record,
  ItemView,
};