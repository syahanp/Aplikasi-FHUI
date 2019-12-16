import React, { Component } from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../components/FontAwesome';

import { Container, Row, Col } from 'react-bootstrap';
import SidebarTab from '../../components/tab/SidebarTab';
import FormPendidikan from '../../components/form/formulirFte/formPendidikan';
import FormPenunjang from '../../components/form/formulirFte/formPenunjang';
import FormPenelitian from '../../components/form/formulirFte/formPenelitian';
import FormPengmas from '../../components/form/formulirFte/formPengmas';
import FormGBLK from '../../components/form/formulirFte/formGBLK'


class HomeFte extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active : ''
        }
    }

    setActiveTab = (event) => {
        
        const {id} = event.target
        console.log(id)

        this.setState({active : id}, () => console.log(this.state.active));
        
    }

    render() { 
        const pdf = <FontAwesomeIcon icon={['fas', 'file-pdf']}/>

        return (
            <Div>
                
                <Container>
                    <Row>
                        <Col sm={3}>
                            <SidebarTab>
                                <SidebarTab.List id='pendidikan' active>
                                    Formulir BKD Unsur Pendidikan
                                </SidebarTab.List>
                                <SidebarTab.List id='penelitian'>
                                    Formulir BKD Unsur Penelitian
                                </SidebarTab.List>
                                <SidebarTab.List id='pengmas'>
                                    Formulir BKD Unsur Pengmas
                                </SidebarTab.List>
                                <SidebarTab.List id='akademis'>
                                    Formulir BKD Unsur Penunjang Akademik
                                </SidebarTab.List>
                                <SidebarTab.List id='gblk'>
                                    Formulir Kewajiban GB-LK
                                </SidebarTab.List>
                            </SidebarTab>
                        
                            {/* <Panduan>
                                 <p> {pdf} Download pedoman pengisian</p>
                            </Panduan> */}
                        </Col>
                        <Col sm={9}>
                            {/* <FormPendidikan /> */}
                            {/* <FormPenelitian /> */}
                            {/* <FormPenunjang /> */}
                            {/* <FormPengmas /> */}
                            <FormGBLK />
                        </Col>
                    </Row>
                </Container>
            </Div>
        );
    }
}
 
export default HomeFte;

const Div = styled.div`
    padding : 3rem 0rem;
`

const Panduan = styled.div`
    background-color: #fff;
    padding: 1rem;
    
    
    & p {
        display: inline-block;
        color: #0085FF;
        margin-left: .5rem;
        font-size: 14px;

        & svg {
            display: inline-block;
            color: #FF3860;
        }
    }
`