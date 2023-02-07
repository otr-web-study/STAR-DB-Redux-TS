import { useItemNavigate } from "../hooks";

import { StarshipDetails, StarshipList } from "../sw-components";
import Row from "../row/row";

const StarshipPage = () => {
  const [onItemSelected] = useItemNavigate();

  return (
    <Row
      left={<StarshipList onItemSelected={onItemSelected} />}
      right={<StarshipDetails />} />
  );
}

export default StarshipPage;