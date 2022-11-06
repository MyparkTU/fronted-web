import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

let items = [];
function NavTabsExample() {
  return (
    <Card>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <p>hi</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p>hello</p>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
    </Card>
  );
}

export default NavTabsExample;