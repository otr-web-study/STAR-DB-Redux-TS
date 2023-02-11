import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { useAppSelector } from 'redux-hooks';
import imageNotFound from 'images/not_found.jpg';
import { SelectItemById } from 'types/selectors';
import { AllItems } from 'types/items';

type ReturnDetailDataHook<T> = [T | undefined, string | undefined, ()=> void];

const useDetailData = <T extends AllItems, S extends SelectItemById>(selector: S): ReturnDetailDataHook<T>  => {
  const [image, setImage] = useState<string>();
  const { id } = useParams();
  let itemId: string;

  if (!id) {
    itemId = '';
  } else {
    itemId = id;
  }

  const item = useAppSelector((state) => selector(state, itemId)) as T;
  
  useEffect(() => {
    if (item)
      setImage(item.image);
  }, [item, setImage]);

  const onImageError = () => {
    if (imageNotFound) {
      setImage(imageNotFound);
    }
  }

  return [item, image, onImageError];
}

export default useDetailData;