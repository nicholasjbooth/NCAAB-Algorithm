import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar } from "react-bootstrap"
function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Navbar>
			<Navbar.Brand href="/">NCAAB Calculator</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
			<Nav>
        <Nav.Link href="/settings">Settings</Nav.Link>
      </Nav>
		</Navbar>
    <Component {...pageProps} />
</div>)
}

export default MyApp
