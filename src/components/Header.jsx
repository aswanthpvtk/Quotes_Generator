import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
     <Navbar className="bg-success">
      <Container>
        <Navbar.Brand className='p-1' >
          
            <i class="fa-brands fa-stack-overflow text-warning me-2 "></i>
            <span class="text-warning">Quotes</span>
            
          
        </Navbar.Brand>
        
      </Container>
    </Navbar>
    </>
  )
}

export default Header