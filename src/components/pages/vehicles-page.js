import { useItemNavigate } from "../hooks";

import { VehicleDetails, VehicleList } from "../sw-components";
import Row from "../row/row";

const VehiclesPage = () => {
  const [onItemSelected] = useItemNavigate();

  return (
    <Row
      left={<VehicleList onItemSelected={onItemSelected} />}
      right={<VehicleDetails />} />
  );
}

export default VehiclesPage;