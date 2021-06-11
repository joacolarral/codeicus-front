import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Codigo',
    dataIndex: 'cod',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
  },
];



// rowSelection object indicates the need for row selection


const FirstStep = (props) => {
  const { onChange, data, } = props
  const rowSelection = {
    onChange: (selectedRow, selectedRows) => {
      onChange(selectedRow, selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.stock === 0,
      // Column configuration not to be checked
      id: record.id,
    })
    ,
  };


  return (
    <Table
      className="background-dark"
      rowClassName="background-dark"
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default FirstStep