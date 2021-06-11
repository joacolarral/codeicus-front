import React, { useState } from 'react'
import { Steps, Button, message } from 'antd';
import { FirstStep, SecondStep, ThirdStep } from './components'

const { Step } = Steps;

var data = [
  { key: '1', id: 1, cod: "PROD-A", name: "Un Producto", stock: 100 },
  { key: '2', id: 2, cod: "PROD-B", name: "Otro Producto", stock: 10 },
  { key: '3', id: 3, cod: "PROD-C", name: "Tercer Producto", stock: 0 },
  { key: '4', id: 4, cod: "PROD-D", name: "Cuarto Producto", stock: 5 }
]

const App = () => {
  const [selectedRows, setSelected] = useState([])
  const [current, setCurrent] = useState(0);


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChangeFirstStep = (keySelected, rowsSelected) => {
    setSelected(rowsSelected);
  }
  const onChangeSecondStep = () => {
  }
  const onChangeThirdStep = () => {
  }


  const steps = [
    {
      title: 'Selecciona los productos',
      content: <FirstStep onChange={onChangeFirstStep} data={data} />,
    },
    {
      title: 'Carga la cantidad que deseas',
      content: <SecondStep data={selectedRows} onChange={onChangeSecondStep} />,
    },
    {
      title: 'Dejanos algun comentario',
      content: <ThirdStep onChange={onChangeThirdStep} />,
    },
  ];

  return (
    <div className="App">
      <div className="App-container">
        <h1>Pedido de productos</h1>
        <div className="step-container">
          <div>
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} description={item.description} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ div>
  );
};

export default App