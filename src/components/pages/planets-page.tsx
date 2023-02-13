import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../row/row";

const PlanetPage = () => {
  return (
    <Row
      left={<PlanetList />}
      right={<PlanetDetails />} />
  );
}

export default PlanetPage;