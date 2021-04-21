import style from 'provider/style';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
    width: 1280,
    margin: '0 auto',
  },
  fromAction: {
    boxShadow: '0 0 10px -8px #000',
    width: '100%',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: [0, 15],
  },
  imageLogin: {
    width: '100%',
    height: 400,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },
});

export default style(styles);
