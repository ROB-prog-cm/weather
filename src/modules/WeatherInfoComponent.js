import React from "react";
import styled from "styled-components";
import {WeatherIcons} from "../App";


const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  color: white;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  & span {
    font-size: 25px;
    color: white;

    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 320px) {
      font-size: 15px;
    }

  }

  @media (max-width: 768px) {
    font-size: 75px;
  }
  @media (max-width: 320px) {
    font-size: 50px;
  }
  
`;

const WeatherIcon = styled.img`
  width: 140px;
  height: 140px;
  margin: 5px auto;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 30px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    margin: 5px 10px;
  }
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  margin: 15px;
  color: white;

  & span {
    margin: 5px 0;
    color: white;
    font-size: 18px;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const WeatherInfoComponent = ({name, value}) => {
  return (
    <InfoContainer>
      <InfoLabel>
        <span>{name}</span>
        {value}
      </InfoLabel>
    </InfoContainer>
  );
};
const WeatherComponent = ({weather}) => {
  /* const isDay = weather?.weather[0].icon?.includes('d')
   const getTime = (timeStamp) => {
     return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
   }*/
  return (
    <Wrapper>
      <WeatherContainer>
        <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}/>
        <Condition>
          <div>{`${Math.floor(weather?.main?.temp - 273)}°C`}</div>
          <span>{weather?.weather[0].description}</span>
        </Condition>
      </WeatherContainer>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoContainer>
        {/*  <WeatherInfo name={isDay ? "sunset" : "sunrise"}
                     value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>*/}
        <WeatherInfoComponent name='Ветер' value={weather?.wind?.speed + ' м/с'}/>
        <WeatherInfoComponent name='Давление' value={weather?.main?.pressure + ' мм.рт.ст'}/>
        <WeatherInfoComponent name='Влажность' value={weather?.main?.humidity + '%'}/>
        <WeatherInfoComponent name='Вероятность дождя' value={weather?.clouds?.all + '%'}/>
      </WeatherInfoContainer>
    </Wrapper>
  );
};

export default WeatherComponent;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`