import React, {useState} from 'react';
import styled from 'styled-components'
import Search from '../Path 2.svg'


const SearchBox = styled.form`
  height: 97px;

  @media (max-width: 1024px) {
    margin-top: 100px;
    margin-left: 50px;
  }
  
  @media (max-width: 425px) {
    margin-top: 100px;
    margin-left: 50px;
  } 
  @media (max-width: 320px) {
    margin-top: 270px;
    margin-left: 50px;
  }

  & input {
    font-size: 30px;
    border: none;
    outline: none;
    padding: 25px;
    border-radius: 8px 0 0 8px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 425px) {
      font-size: 10px;
    }
  }

  & button {
    padding: 25px;
    border-radius: 0 8px 8px 0;
    background-color: white;
    font-size: 30px;
    color: #1086FF;
    border: none;
    outline: none;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 425px) {
      font-size: 10px;
    }
  }
`;

const ButtonSearch = styled.span`
  font-size: 18px;
  color: #FFFFFF;
  opacity: 0.6;
  margin: 0 10px;
`
const Foo = styled.div`
  display: flex;
  font-size: 18px;
  color: #FFFFFF;
  opacity: 0.6;
`

const Wrapper = ({click, setClick}) => {
  return (
    <div style={{display: 'flex', marginTop:'100px',marginLeft:'50px'}}>
      <ButtonSearch onClick={() => setClick(!click)}>Сменить город</ButtonSearch>
      <Foo>
        <img style={{width: '14px', height: '20px', padding: '0 7px'}} src={Search} alt=""/>
        <div>Мое местоположение</div>
      </Foo>
    </div>
  )
}


const CityComponent = ({updateCity,fetchWeather}) => {
    const [click, setClick] = useState(true)
    return (
      <>
        {
          click ? <Wrapper click={click} setClick={setClick}/> :
            <SearchBox onSubmit={fetchWeather}>
              <input placeholder='City'
                     onChange={(e) =>
                       updateCity(e.target.value)}/>
              <button type='submit'>OK</button>
            </SearchBox>
        }
      </>
    );
  }
;

export default CityComponent;

