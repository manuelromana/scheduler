import React, { useState } from 'react'
import NavBar from "../../Components/NavBar"
import Menu from "./Menu"
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

const Container = styled.div`
  display: flex;
`;
const ContainerPage = styled.div`
  padding: 32px;
  flex-grow: 1;
  margin-top: 70px;
`;

export default function Layout({ children, authenticated }) {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <Container>
      <CssBaseline />

      <NavBar></NavBar>
      {authenticated && <Menu open={openMenu} handleClose={() => setOpenMenu(false)}></Menu>}
      <ContainerPage>

        {children}
      </ContainerPage>
    </Container>
  )
}
