import { Container, Row, Col } from 'react-bootstrap';
import Square from './Square';

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  let statusColor = '#333';
  
  if (winner) {
    status = '🏆 Vencedor: ' + winner;
    statusColor = '#4caf50';
  } else if (squares.every(square => square !== null)) {
    status = '🤝 Empate!';
    statusColor = '#ff9800';
  } else {
    status = '🎯 Próximo jogador: ' + (xIsNext ? 'X' : 'O');
    statusColor = '#000000ff';
  }

  return (
    <Container className="text-center">
      <div className="status mb-4">
        <h4 
          style={{
            color: statusColor,
            fontWeight: '500',
            fontSize: '1.4rem',
            textShadow: '0 1px 3px rgba(0,0,0,0.1)',
            margin: '0',
            padding: '15px',
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: '15px',
            border: `2px solid ${statusColor}20`
          }}
        >
          {status}
        </h4>
      </div>
      <div className="board">
        <Row className="justify-content-center">
          <Col xs="auto">
            <div 
              className="board-container"
              style={{
                backgroundColor: 'rgba(112, 112, 112, 0.9)',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.7)'
              }}
            >
              <div className="board-row d-flex justify-content-center mb-2">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
              </div>
              <div className="board-row d-flex justify-content-center mb-2">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
              </div>
              <div className="board-row d-flex justify-content-center">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;

