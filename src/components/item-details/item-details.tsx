import { Fragment, Children, cloneElement, ReactElement } from 'react';

import { useDetailData } from 'components/hooks';
import { Planet } from 'types';

import './item-details.css';
import { AllItems } from 'types/items';
import { SelectItemById } from 'types/selectors';


interface RecordProps {
  label: string,
  field: keyof Planet,
  item?: Planet,
}

export interface ItemDetailsProps<S> {
  children: ReactElement<ItemViewProps>[],
  selector: S,
}

interface ItemViewProps {
  item: Planet,
  image: string | undefined,
  onImageError: () => void,
  children: ReactElement<ItemViewProps>[],
}

const Record = ({ item, field, label }: RecordProps) => {
  if (!item) {
    return null;
  }
  
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

const ItemDetails = <
  T extends AllItems, S extends SelectItemById
>({ children, selector }: ItemDetailsProps<S>) => {

  const [item, image, onImageError ] = useDetailData<T, S>(selector)

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