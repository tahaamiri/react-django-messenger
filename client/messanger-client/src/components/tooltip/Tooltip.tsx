import React, { useState } from 'react';
import { Tooltip } from './Tooltip.interface';

const tooltip = (props: Tooltip) => {

    const [showTooltip , setShowTooltip] = useState<boolean>(false);

  return (
      <div>
          <span>
              taha
          </span>
      </div>
  );
};

export default tooltip;
