import style from './provider/style';
import './assets/fonts/font.css';

const styles = (theme) => ({
  '@global': {
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
    '&::-webkit-scrollbar': {
      width: 5,
      height: 5,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: theme.shape.radius5,
      background: '#20bf6b',
    },
    body: {
      fontFamily: theme.typography.fontFamily,
      overscrollBehaviorY: 'contain',
      direction: 'rtl',
      '& a': {
        color: '#1bc5bd',
        transition:
          'color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease',
        '&:hover': {
          color: '#12827c',
        },
      },
      '& ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
      '& .ant-notification-notice-message': {
        fontSize: '13px !important',
      },
      '& .ant-notification-notice': {
        paddingRight: 10,
        paddingBottom: 10,
      },
      '& .ant-notification-notice-closable .ant-notification-notice-message': {
        paddingRight: 30,
      },
      '& .ant-picker-prev-icon, .ant-picker-super-prev-icon': {
        transform: 'rotate(135deg)',
      },
      '& .ant-picker-next-icon, .ant-picker-super-next-icon': {
        transform: 'rotate(-45deg)',
      },
      '&::-webkit-scrollbar-button': {
        display: 'none',
      },
      '&::-webkit-scrollbar': {
        width: 5,
        height: 5,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: theme.shape.radius5,
        background: '#20bf6b',
      },
      '& .ant-modal-content': {
        height: '100%',
        backgroundColor: theme.palette.background.default,
        '& button': {
          color: `${theme.palette.text.primary} !important`,
        },
      },
      '& .ant-modal-header': {
        // backgroundColor: theme.palette.background.default,
        '& .ant-modal-title': {
          color: `${theme.palette.text.primary} !important`,
        },
      },
      '& .ant-modal-body': {
        background: '#fff',
        height: '100%',
      },
      '& .ant-tooltip': {
        fontSize: '11px !important',
      },
      '& .ant-modal-confirm-body': {
        display: 'flex',
        alignItems: 'center',
        '& .anticon': {
          margin: 0,
          marginLeft: 16,
          fontSize: 30,
        },
      },
      '& .ant-table-content': {
        '&::-webkit-scrollbar-button': {
          display: 'none',
        },
        '&::-webkit-scrollbar': {
          width: 5,
          height: 5,
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: theme.shape.radius5,
          background: '#20bf6b',
        },
      },
    },
  },
  wrapper: {
    height: '100%',
    overflow: 'auto',
    '& .ant-spin-nested-loading': {
      height: '100%',
    },
    '& .ant-spin-container': {
      height: '100%',
    },
    '& .ant-spin-container .ant-spin-blur': {
      height: '100%',
    },
    '& .ant-spin-blur': {
      opacity: 1,
      height: '100%',
    },
    '& .ant-spin-nested-loading > div > .ant-spin': {
      maxHeight: 'unset !important',
    },
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
    '&::-webkit-scrollbar': {
      width: 5,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: theme.shape.radius5,
      background: '#20bf6b',
    },
  },
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F7FAFA',
    margin: 'auto',
    '& a': {
      textDecoration: 'none',
      fontFamily: theme.typography.fontFamily,
    },
  },
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
  },
  content: {
    fontFamily: theme.typography.fontFamily,
  },
});

export default style(styles);
