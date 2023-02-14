import { VehicleDetails, VehicleList } from "../sw-components";
import Row from "../row/row";

const VehiclesPage = () => {
  return (
    <Row
      left={<VehicleList />}
      right={<VehicleDetails />} />
  );
}

export default VehiclesPage;