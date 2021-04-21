import style from 'provider/style';

const styles = (theme) => ({
  root: {
    '&:focus-within': {
      background: '#ebedf3 !important',
      border: '1px solid #c2c5c9',
      boxShadow: 'none !important',
    },
    '& input': {
      backgroundColor: '#ebedf3 !important',
      '&:focus': {
        backgroundColor: '#ebedf3',
      },
    },
    backgroundColor: '#ebedf3 !important',
    // borderColor: '#ebedf3',
    borderColor: 'transparent !important',
    color: '#3f4254',
    transition:
      'color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease',
    borderRadius: '.42rem !important',
    width: '100%',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      // background: '#fff',
      // border: '1px solid #c2c5c9',
      // boxShadow: 'none !important',
      backgroundColor: '#ebedf3',
      borderColor: '#ebedf3',
      color: '#3f4254',
      transition:
        'color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease',
    },
    '& .ant-input[disabled]': {
      color: '#000',
      opacity: 0.9,
    },
  },
});

export default style(styles);
