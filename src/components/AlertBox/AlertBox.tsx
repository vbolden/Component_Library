import type {AlertBoxProps} from '../../types/index.ts';

function AlertBox({ type, message, onClose, children }: AlertBoxProps) {
  return (
    <div className={`alert-box alert-${type}`}>
      <span>{message}</span>
      {children}
      {onClose && <button onClick={onClose}>Close</button>}
    </div>
  );
}

export default AlertBox;