import type { AlertBoxProps } from '../../types/index.ts';

function AlertBox({ type, message, onClose, children }: AlertBoxProps) {

  return (
    <div className={type}>
      <div className='alert'>
        <span>{message}</span>
        {onClose && <button onClick={onClose} className={`close ${type}`}>x</button>}
      </div>
      {children}
    </div>
  );
};

export default AlertBox;