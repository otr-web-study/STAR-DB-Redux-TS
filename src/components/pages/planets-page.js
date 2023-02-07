import { useItemNavigate } from "../hooks";

import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../row/row";

const PlanetPage = () => {
  const [onItemSelected] = useItemNavigate();

  return (
    <Row
      left={<PlanetList onItemSelected={onItemSelected} />}
      right={<PlanetDetails />} />
  );
}

export default PlanetPage;