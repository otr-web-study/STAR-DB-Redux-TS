import { useState, useEffect } from 'react';

const useDetailData = (id, getData, getImageUrl, imageNotFound) => {
  const [item, setItem] = useState();
  const [image, setImage] = useState();
  const [isPending, setIsPending] = useState(false);

  const updateItem = (id) => {
    if (!id) {
      return
    }

    setIsPending(true);
    getData(id)
        .then((data) => {
          setItem(data);
          setImage(getImageUrl(data));
        })
        .finally(() => setIsPending(false));
  };

  useEffect(() => {
    updateItem(id);
  }, [id]);

  const onImageError = () => {
    if (imageNotFound) {
      setImage(imageNotFound);
    }
  }

  return [item, image, isPending, onImageError];
}

export default useDetailData;