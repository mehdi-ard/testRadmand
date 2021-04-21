import style from 'provider/style';

const styles = (theme) => ({
  button: {
    color: '#fff',
    backgroundColor: '#4BB543',
    borderColor: '#4BB543 ',
    padding: '0 30px  !important',
    height: '48px !important',
    '&:hover': {
      backgroundColor: '#28a21f',
      borderColor: '#28a21f',
      color: '#fff',
    },
    '&:focus': {
      backgroundColor: '#28a21f',
      borderColor: '#28a21f',
      color: '#fff',
    },
  },
});

export default style(styles);
