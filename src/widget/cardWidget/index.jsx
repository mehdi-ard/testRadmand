import { Skeleton, Switch, Card, Avatar } from 'antd';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import style from './style';

const { Meta } = Card;

function CardWidget(props) {
  const {
    classes,
    loading,
    title,
    description,
    onClickAdd,
    onClickRemove,
  } = props;
  return (
    <Card
      style={{ width: 300, margin: 16 }}
      actions={[
        <PlusCircleOutlined key="add" onClick={() => onClickAdd()} />,
        <DeleteOutlined key="remove" onClick={() => onClickRemove()} />,
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={title}
          description={description}
        />
      </Skeleton>
    </Card>
  );
}

export default style(CardWidget);
