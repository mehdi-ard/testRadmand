import style from 'provider/style';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#e0e0e0',
    padding: [0, 15],
  },
  count: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutUser: {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
});

export default style(styles);
