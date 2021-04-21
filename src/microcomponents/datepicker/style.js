import style from 'provider/style';

const styles = (theme) => ({
  datepicker: {
    width: '100%',
    height: 48,
    color: theme.palette.text.primary,
    borderRadius: 5,
    // border: 'none',
    '&.ant-picker-disabled': {
      background: '#fff',
      color: theme.palette.text.primary,
      opacity: 0.9,
    },
    '& .ant-picker-input > input[disabled]': {
      color: theme.palette.text.primary,
    },
  },
});

export default style(styles);
