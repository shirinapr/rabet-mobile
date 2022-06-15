import styled from 'styled-components';

export const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;

export const Box = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors.primary.lightest};
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 38px;
`;

export const Asset = styled.div`
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: center;
  font-family: Roboto;
`;

export const NameValue = styled.div`
  margin: 10px 0 -4.5px 0;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
`;

export const EditName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
