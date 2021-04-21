import React from 'react';
import { Checkbox as CoreCheckboxGroup } from 'antd';
import Checkbox from 'microcomponents/checkbox';

function Checkboxs({ data, props }) {
  return (
    <CoreCheckboxGroup.Group {...props}>
      {data !== undefined &&
        data.map((item, index) => (
          <>
            <Checkbox value={item.value || item.id} key={index}>
              {item.label}
            </Checkbox>
          </>
        ))}
    </CoreCheckboxGroup.Group>
  );
}

export default Checkboxs;
