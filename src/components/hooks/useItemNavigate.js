import { useParams, useNavigate } from "react-router-dom";

const useItemNavigate = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onItemSelected = (itemId) => {
    if (id) {
      return navigate(`../${itemId}`)
    }
    navigate(itemId);
  }

  return [onItemSelected];
}

export default useItemNavigate;