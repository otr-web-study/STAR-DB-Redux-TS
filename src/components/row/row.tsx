import { ReactNode } from 'react';

import './row.css';


interface RowProps {
  left: ReactNode,
  right: ReactNode,
}


const Row = ({ left, right }: RowProps) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
}

export default Row;