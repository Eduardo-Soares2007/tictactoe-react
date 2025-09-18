import { Button } from 'react-bootstrap';

function Square({ value, onSquareClick }) {
  const isEmpty = !value;
  const isX = value === 'X';
  const isO = value === 'O';

  return (
    <Button
      className="square"
      onClick={onSquareClick}
      style={{
        width: '90px',
        height: '90px',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid #e0e0e0',
        borderRadius: '15px',
        backgroundColor: isEmpty ? '#fafafa' : (isX ? '#e3f2fd' : '#fff3e0'),
        color: isX ? '#1976d2' : (isO ? '#f57c00' : '#666'),
        boxShadow: isEmpty ? '0 4px 8px rgba(0,0,0,0.1)' : '0 6px 12px rgba(0,0,0,0.15)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: isEmpty ? 'pointer' : 'default',
        transform: 'scale(1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseOver={(e) => {
        if (isEmpty) {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          e.target.style.backgroundColor = '#f5f5f5';
          e.target.style.borderColor = '#1976d2';
        }
      }}
      onMouseOut={(e) => {
        if (isEmpty) {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          e.target.style.backgroundColor = '#fafafa';
          e.target.style.borderColor = '#e0e0e0';
        }
      }}
      onMouseDown={(e) => {
        if (isEmpty) {
          e.target.style.transform = 'scale(0.95)';
        }
      }}
      onMouseUp={(e) => {
        if (isEmpty) {
          e.target.style.transform = 'scale(1.05)';
        }
      }}
      disabled={!isEmpty}
    >
      {value && (
        <span
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            animation: value ? 'popIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'none'
          }}
        >
          {value}
        </span>
      )}
    </Button>
  );
}

export default Square;

