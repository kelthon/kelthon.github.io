import { RiArrowDownFill } from '@remixicon/react';
import './ScrollIndicator.css';

function ScrollIndicator(): JSX.Element {
  return (
    <div className="float-container">
      <div className="wrapper">
        <button type="button">
          <RiArrowDownFill />
        </button>
      </div>
    </div>
  );
}

export default ScrollIndicator;
