import { Container, Row, Col } from 'react-grid-system';

import Weather from '../features/weather/Weather';
import BackgroundImages from '../features/backgroundImages/BackgroundImages';

import './App.css';

function App() {
  return (
    <>
        <BackgroundImages>
            <Container>
                <Row>
                    <Col>
                        &nbsp;
                    </Col>
                    <Col>
                        &nbsp;
                    </Col>
                    <Col>
                        <Weather />
                    </Col>
                </Row>
            </Container>
        </BackgroundImages>
    </>
  )
}

export default App;