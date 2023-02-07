import { Fragment, Children, cloneElement } from 'react';

import { useDetailData } from '../hooks';
import Spinner from '../spinner';

import imgNotFound from '../../images/not_found.jpg';
import './item-details.css';


const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
  const [
    item, image, isPending, onImageError
  ] = useDetailData(itemId, getData, getImageUrl, imgNotFound);

  const select = (!item && !isPending) && (
    <h3 className='item-title'> &lt;-Select item</h3>
  );
  const spinner = isPending && <Spinner />;
  const content = (item && !isPending) && (
    <ItemView item={item} image={image} onImageError={onImageError}>
      {Children.map(children, (child) => {
        return cloneElement(child, {item});
      })}
    </ItemView>
   );

  return (
    <div className="item-details card">
      {spinner}
      {content}
      {select}
    </div>
  )
}

const ItemView = ({ item: { name }, image, children, onImageError }) => {
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