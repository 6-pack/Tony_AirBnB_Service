import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
`;

const Page = styled.div`
  border: 1px solid white;
  display: flex;
  width: 32px;
  height: 32px;
  color: rgb(41, 132, 137);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

const SelectButton = styled(Page)`
  border: 1px solid rgb(41, 132, 137);

`;

const PageSelector = (props) => {
  return (
    <PageContainer>
      <SelectButton>&lsaquo;</SelectButton>
      <Page>1 </Page>
      <Page>2 </Page>
      <Page>3 </Page>
      <Page>4 </Page>
      <Page>... </Page>
      <SelectButton>&rsaquo;</SelectButton>
    </PageContainer>
  )
};

export default PageSelector;
