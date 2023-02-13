import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row/row";

const PeoplePage = () => {
  return (
    <Row
      left={<PersonList />}
      right={<PersonDetails />} />
  );
}

export default PeoplePage;