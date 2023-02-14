import { StarshipDetails, StarshipList } from "../sw-components";
import Row from "../row/row";

const StarshipPage = () => {
  return (
    <Row
      left={<StarshipList />}
      right={<StarshipDetails />} />
  );
}

export default StarshipPage;