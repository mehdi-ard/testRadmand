import { Table as CoreTable, Tag } from 'antd';
import { connect } from 'react-redux';

function Table({ dataSource }) {
  const columns = [
    {
      title: 'عنوان',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
      width: 300,
    },
    {
      title: ' توضیحات',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'برچسب',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  return <CoreTable dataSource={dataSource} columns={columns} />;
}

const mapSateToProps = (state) => ({
  dataSource: state.list,
});

export default connect(mapSateToProps)(Table);
