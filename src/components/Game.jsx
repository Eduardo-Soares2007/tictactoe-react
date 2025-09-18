import { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import Board from './Board';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Ir para jogada #' + move;
    } else {
      description = 'Ir para o início do jogo';
    }
    return (
      <ListGroup.Item 
        key={move} 
        action 
        onClick={() => jumpTo(move)}
        active={move === currentMove}
        className="d-flex justify-content-between align-items-center game-history-item"
        style={{
          border: 'none',
          borderRadius: '8px',
          margin: '4px 8px',
          backgroundColor: move === currentMove ? '#1976d2' : 'transparent',
          color: move === currentMove ? 'white' : '#333',
          transition: 'all 0.3s ease'
        }}
      >
        {description}
        {move === currentMove && <span className="badge bg-light text-primary">Atual</span>}
      </ListGroup.Item>
    );
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000ff 0%, #555555ff 100%)',
      padding: '20px 0'
    }}>
      <Container className="py-4">
        <Row>
          <Col xs={12} className="text-center mb-5">
            <h1 
              className="display-3 mb-3"
              style={{
                color: 'white',
                fontWeight: '300',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '2px'
              }}
            >
              Jogo da Velha
            </h1>
            <p 
              className="lead"
              style={{
                color: 'rgba(253, 253, 253, 0.9).9)',
                fontSize: '1.2rem',
                fontWeight: '300'
              }}
            >
              <i>Desenvolvido com React e Bootstrap</i>
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center align-items-start">
          <Col xs={12} md={6} lg={5} className="mb-4">
            <Card 
              className="game-card"
              style={{
                border: 'none',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                background: 'rgba(73, 73, 73, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Card.Body className="p-4">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                <div className="text-center mt-4">
                  <Button 
                    onClick={resetGame}
                    style={{
                      backgroundColor: '#1976d2',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 30px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(25, 118, 210, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(25, 118, 210, 0.3)';
                    }}
                  >
                    🎮 Novo Jogo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col xs={12} md={6} lg={4}>
            <Card 
              style={{
                border: 'none',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                background: 'rgba(16, 46, 104, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Card.Header 
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '20px 20px 0 0',
                  padding: '20px 20px 10px'
                }}
              >
                <h5 
                  className="mb-0"
                  style={{
                    color: '#ffffffff',
                    fontWeight: '500',
                    fontSize: '1.3rem'
                  }}
                >
                  📋 Histórico de Jogadas
                </h5>
              </Card.Header>
              <Card.Body className="p-0">
                <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '0 10px 10px' }}>
                  {moves}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Game;

