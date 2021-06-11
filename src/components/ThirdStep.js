import React from 'react'
import { Input, DatePicker, InputNumber } from 'antd';

export default function ThirdStep() {
  return (
    <div>
      <h2> Quien lo recibira: </h2>
      <div className="thirdstep-input-container">
        <label>Nombre: </label>
        <Input />
      </div>
      <div className="thirdstep-input-container">
        <label>DNI: </label>
        <InputNumber style={{ width: '200px' }} />
      </div>
      <div className="thirdstep-input-container">
        <label>Fecha a entregar: </label>
        <DatePicker />
      </div>
    </div >
  )
}
