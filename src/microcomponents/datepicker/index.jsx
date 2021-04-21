import React from 'react';
import { DatePicker as CoreDatePicker } from 'antd';

import style from './style';

class DatePicker extends React.PureComponent {
  render() {
    const { classes, className } = this.props;
    return (
      <CoreDatePicker
        className={[classes.datepicker, className].join(' ')}
        {...this.props}
        locale={locale}
      />
    );
  }
}

export default style(DatePicker);
