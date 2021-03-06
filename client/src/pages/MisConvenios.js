
import React from 'react'
import { Icon, Table, Header } from 'semantic-ui-react'
import _ from 'lodash'
import Navbar from "../componentsAfiliados/Navbar/Navbar";
import Voucher from "../documentos/Voucher.docx";

import {EmpresasBtn,EmpresasBtnLink,} from "../components/Empresas/EmpresasElements.js";

const MisConvenios = () => (

<left>
<Navbar/>
<Table celled>
  <center>
  <div>
    <Header size='huge'>Bienvenidos a tus convenios</Header>
    <Header size='small'> En esta seccion podras llevar un seguimiento de tus convenios para saber en el estado en el que se encuentran como
     tambien apreciar ciertos comentarios por parte de la directiva.</Header>
    </div>

    
    
  <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nombre</Table.HeaderCell>
        <Table.HeaderCell>Estado</Table.HeaderCell>
        <Table.HeaderCell>Comentario</Table.HeaderCell>
        <Table.HeaderCell>Cupón
        <Icon color ='white' name='vcard'  size='large'/>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Coopeuch </Table.Cell>
        <Table.Cell>
        <Icon color='white' name='check' size='large' />
            Habilitado
            
        </Table.Cell>
        <Table.Cell>Sin comentarios
        </Table.Cell>
        <Table.Cell>
        <EmpresasBtn>
          <EmpresasBtnLink href= {Voucher} download="Voucher">Descargar Voucher</EmpresasBtnLink> 
        </EmpresasBtn>
        
        </Table.Cell>
      </Table.Row>

      <Table.Row warning>
        <Table.Cell>Cosmetica y Belleza</Table.Cell>
        <Table.Cell>
          <Icon color='white' name='attention' size='large' />
          Pendiente
        </Table.Cell>
        <Table.Cell>Sin Comentarios</Table.Cell>
      </Table.Row>
      <Table.Row warning >
        <Table.Cell>Quintero Camping</Table.Cell>
        <Table.Cell>
            <Icon name='attention' size ='large' />
            Pendiente
        </Table.Cell>
        
        <Table.Cell>
          Sin comentarios
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Caja Los Andes</Table.Cell>
        
        <Table.Cell>
        
          <Icon color='white' name='close' size='large' /> 
           No habilitado
        </Table.Cell>
        
        <Table.Cell>Sin Comentarios</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Óptica Viña del Mar </Table.Cell>
        <Table.Cell>
        <Icon color='white' name='checkmark' size='large' />
            Habilitado
            </Table.Cell>
        <Table.Cell>Sin Comentarios</Table.Cell>
        <Table.Cell>
        <EmpresasBtn>
          <EmpresasBtnLink href= {Voucher} download="Voucher">Descargar Voucher</EmpresasBtnLink> 
        </EmpresasBtn>

    
        </Table.Cell>
      </Table.Row>
    </Table.Body>
    </center>
  </Table>
  </left>
)

export default MisConvenios