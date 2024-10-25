const users = [
  { id: 0, editDate: '2024-08-24 13:20:56', name: 'Umi', currentStatus: '这是当前的状态', work: 1, nickName: 'U', gender: 'MALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长这是一段很长的描述文案，很长，非常长，超级长这是一段很长的描述文案，很长，非常长，超级长这是一段很长的描述文案，很长，非常长，超级长这是一段很长的描述文案，很长，非常长，超级长这是一段很长的描述文案，很长，非常长，超级长这是一段很长的描述文案，很长，非常长，超级长这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 1, editDate: '2024-08-24 13:20:56', name: 'Fish', currentStatus: '这是当前的状态', work: 1, nickName: 'Baaa', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 2, editDate: '2024-08-24 13:20:56', name: 'Fish1', currentStatus: '这是当前的状态', work: 1, nickName: 'B', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 3, editDate: '2024-08-24 13:20:56', name: 'Fish2', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 2, nickName: 'sdj', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 4, editDate: '2024-08-24 13:20:56', name: 'Fish3', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 2, nickName: 'sdj', gender: 'MALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 5, editDate: '2024-08-24 13:20:56', name: 'Fish4', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 1, nickName: 'sdj', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 6, editDate: '2024-08-24 13:20:56', name: 'Fish5', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 2, nickName: 'B', gender: 'MALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 7, editDate: '2024-08-24 13:20:56', name: 'Fish6', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 1, nickName: 'sdfsdB', gender: 'MALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 8, editDate: '2024-08-24 13:20:56', name: 'Fish7', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 2, nickName: 'B', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 9, editDate: '2024-08-24 13:20:56', name: 'Fish8', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 1, nickName: 'B', gender: 'MALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 10, editDate: '2024-08-24 13:20:56', name: 'Fish9', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 2, nickName: 'B', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 11, editDate: '2024-08-24 13:20:56', name: 'Fish10', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 1, nickName: 'tyet', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 12, editDate: '2024-08-24 13:20:56', name: 'Fish11', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 1, nickName: 'B', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 13, editDate: '2024-08-24 13:20:56', name: 'Fish12', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 2, nickName: 'asdasd', gender: 'MALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 14, editDate: '2024-08-24 13:20:56', name: 'Fish13', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 2, nickName: 'B', gender: 'FEMALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
  { id: 15, editDate: '2024-08-24 13:20:56', name: 'Fish14', currentStatus: '这是当前的状态121213123123123这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态这是当前的状态', work: 2, nickName: 'asdasdasdvxcv', gender: 'MALE', sex: 34, address: '四川省成都市高新区', memo: '这是一段很长的描述文案，很长，非常长，超级长' },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
