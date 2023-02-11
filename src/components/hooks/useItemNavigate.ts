import { useParams, useNavigate } from "react-router-dom";

const useItemNavigate = (): [(itemId:string) => void] => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onItemSelected = (itemId: string) => {
    if (id) {
      return navigate(`../${itemId}`)
    }
    navigate(itemId);
  }

  return [onItemSelected];
}

export default useItemNavigate;