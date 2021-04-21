import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectTableList } from 'state';
import CardWidget from 'widget/cardWidget';
import Table from 'widget/table';
import style from './style';

function Home({ classes, dataSource, pushSelect }) {
  const data = [
    {
      id: 0,
      title: 'لورم ایپسوم 1',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      tags: ['nice', 'developer'],
    },
    {
      id: 1,
      title: 'لورم ایپسوم 2',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      tags: ['loser'],
    },
    {
      id: 2,
      title: 'لورم ایپسوم 3',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      title: 'لورم ایپسوم 4',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      tags: ['loser', 'developer'],
    },
  ];

  const handelSelectAdd = (e) => {
    pushSelect([...dataSource, e]);
  };

  const handelSelectRemove = (e) => {
    let data = dataSource;
    for (var i = 0; i < data.length; i++)
      if (data[i].id === e.id) {
        data.splice(i, 1);
        break;
      }
    console.log(data);
    pushSelect([...data]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.cardList}>
        {data.map((item, index) => (
          <CardWidget
            {...item}
            key={index}
            onClickAdd={() => handelSelectAdd(item)}
            onClickRemove={() => handelSelectRemove(item)}
          />
        ))}
      </div>

      <Table />
    </div>
  );
}

const mapSateToProps = (state) => ({
  dataSource: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  pushSelect: (item) => dispatch(selectTableList(item)),
});

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(withRouter(style(Home)));
