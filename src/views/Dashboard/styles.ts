import styled from 'styled-components';

export const DashboardContent = styled.div`
  margin-top: 100px;
  padding: 16px;
  background-size: cover;
  background-position: center;
`;

export const DashboardCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;