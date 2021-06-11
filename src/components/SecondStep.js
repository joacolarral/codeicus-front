import React from 'react'
import { List, InputNumber } from 'antd';

export default function SecondStep(props) {
  const { data, onChange } = props
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={
              <div className="second-step-list">
                <p className="second-step-text">{item.name}</p>
                <InputNumber min={0} max={item.stock} defaultValue={1} onChange={onChange} />
              </div>
            }
          />
        </List.Item>
      )}
    />
  )
}