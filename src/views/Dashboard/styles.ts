import styled from 'styled-components';

export const DashboardContent = styled.div`
  background-color: rgba(255, 255, 255, 0);
  padding: 7vh;
  height: 80vh;
  background-size: cover;

`;

export const DashboardCard = styled.div`
  /* background-color:rgba(0, 0, 0, 1) ; */
  flex-flow: row wrap;
  gap: 16px;
  
`;


export const DashboardBack = styled.div`

/* display: flex; */
/* flex-grow:inherit ; */
/* position: absolute; */
`;

export const SliderContainer = styled.div`
border: 2px solid rgb(80, 95, 44);
  background-color: rgba(138, 121, 93, 0.605);
  height: 70vh;
  overflow: hidden;
  /* border: 5px solid rgb(87, 178, 102); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-top: 10vh;
  
`;

export const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
`;

