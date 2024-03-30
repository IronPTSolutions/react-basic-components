import React from 'react';
import './Panel.css';

function Panel({ header, footer, title, text, mode, children }) {
  return (
    <div className={`panel panel-${mode}`}>
      {header && <div className="panel-header">{header}</div>}
      {(title || text || children) && (
        <div className="panel-body">
          {title && <h5 className='panel-title'>{title}</h5>}
          {(text || children) && (
            <div className="panel-text">{children ? children : text}</div>
          )}
        </div>
      )}
      {footer && <div className='panel-footer'>{footer}</div>}
    </div>
  );
}

Panel.defaultProps = {
  mode: 'primary'
}

export default Panel;
