import { useItemNavigate } from "../hooks";

import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row/row";

const PeoplePage = () => {
  const [onItemSelected] = useItemNavigate();

  return (
    <Row
      left={(
        <PersonList 
          onItemSelected={onItemSelected} />
      )}
      right={<PersonDetails />} />
  );
}

export default PeoplePage;