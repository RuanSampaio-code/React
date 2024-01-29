
import Input  from './Components/Input'
import Button from './Components/Button'

import {Container, Content, Row} from './styles.js'
import { useState } from 'react'

const  App = () => {

  /* Criando um estado que vai armazer o  CurrentNumber, setCurrentNumber */
  const [CurrentNumber, setCurrentNumber] = useState('0');

  const [firstNumber, setFirtsNumber] = useState();

  const handleClear = () => {
    setCurrentNumber('')

  }
  const handleAddNMumber = (number) => {
    setCurrentNumber(prev => `${number}${prev}`)

  }
  return (
    <Container>
      <Content>
         <Input value = {CurrentNumber}/>
         <Row>
            <Button label = "X"/>
            <Button label = "/"/>
            <Button label = "C" onClick={() => handleClear()}/>
            <Button label = "+"/>
          </Row>
         <Row>
            <Button label = "7" onClick={() => handleAddNMumber('7')}/>
            <Button label = "8" onClick={() => handleAddNMumber('8')}/>
            <Button label = "9" onClick={() => handleAddNMumber('9')}/>
            <Button label = "+" onClick={() => handleAddNMumber('')}/>
          </Row>
         <Row>
            <Button label = "4" onClick={() => handleAddNMumber('4')}/>
            <Button label = "5" onClick={() => handleAddNMumber('5')}/>
            <Button label = "6" onClick={() => handleAddNMumber('6')}/>
            <Button label = "-" onClick={() => handleAddNMumber('')}/>
          </Row>
          <Row>
            <Button label = "1" onClick={() => handleAddNMumber('1')}/>
            <Button label = "2" onClick={() => handleAddNMumber('2')}/>
            <Button label = "3" onClick={() => handleAddNMumber('3')}/>
            <Button label = "=" onClick={() => handleAddNMumber('=')}/>
          </Row>
          
          
         
           
      </Content>
    </Container>
  );
}

export default App;
