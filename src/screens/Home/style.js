import styled from "styled-components/native";

export const ContainerLogo = styled.View`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  gap: 0.4rem;
`;

// export const ContainerTitle = styled.View`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
//   padding: 8px;
//   gap: 0.4rem;
// `;

export const Logo = styled.Image`
  height: 30px;
  width: 30px;
  padding: 4px;
  border-radius: 20px;
`;

export const TitleLogo = styled.Text`
  color: gray;
  font-size: 0.8rem;
  line-height: 0.8rem;
`;

export const TitleLocation = styled.Text`
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const ImageUser = styled.Image``;

export const ViewSearch = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 8px;
`;

export const ViewSearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: rgb(229 ,231 ,235);
  padding: 10px;
`;
