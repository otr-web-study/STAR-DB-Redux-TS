import { useState, useEffect } from 'react';

const useListData = (getData, callback, value) => {
  const [itemList, setItemList] = useState(value);

  useEffect(() => {
    getData()
      .then((data) => {
        setItemList(data);

        callback && callback(data);
      })
  }, []);

  return [itemList];
}

export default useListData;