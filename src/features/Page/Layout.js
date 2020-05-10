import React, { useState } from 'react'
import NavBar from "../../Components/NavBar"
import Menu from "./Menu"
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const Container = styled.div`
  display: flex;
`;
const ContainerPage = styled.div`
  padding: 32px;
  flex-grow: 1;
`;

export default function Layout({ children }) {
    const [openMenu, setOpenMenu] = useState(true)
    return (
        <Container>
            <CssBaseline />

            <NavBar></NavBar>
            <Menu open={openMenu} handleClose={() => setOpenMenu(false)}></Menu>
            <ContainerPage>
                <Toolbar></Toolbar>
                {children}
            </ContainerPage>
        </Container>
    )
}
