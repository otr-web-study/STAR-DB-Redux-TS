import { useState, useEffect } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const statuses = {
  loading: 'loading',
  success: 'success',
  error: 'error',
}


const WithData = ({ component: Component, ...props }) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState(statuses.loading);

  const { getData } = props;

  useEffect(() => {
    getData()
      .then(onDataLoaded)
      .catch(onError)
  });

  const onDataLoaded = (data) => {
    setData(data);
    setStatus(statuses.success);
  }

  const onError = () => {
    setStatus(statuses.error);
  }

  if (status === status.loading) {
    return <Spinner />
  }

  if (status === statuses.error) {
    return <ErrorIndicator />
  }

  return <Component data={data} {...props} />
}

export default WithData;