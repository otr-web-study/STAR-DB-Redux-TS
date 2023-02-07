import { usePageState } from "../hooks";

import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row/row";

const PeoplePage = () => {
  const [itemId, onItemSelected, setItemId] = usePageState();

  const onDataLoaded = (data) => {
    if (data && data.length) {
      setItemId(data[0].id);
    }
  }

  return (
    <Row
      left={(
        <PersonList 
          onItemSelected={onItemSelected} 
          onDataLoaded={onDataLoaded}/>
      )}
      right={<PersonDetails itemId={itemId} />} />
  );
}

export default PeoplePage;