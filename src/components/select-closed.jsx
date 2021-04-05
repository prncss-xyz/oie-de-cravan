import React from 'react';
import theme from './theme';

export default function SelectClosed({label}) {    
  return <div css={{
      padding: '12px 18px',
      borderStyle: 'solid',
      borderColor: theme.colors.accent,
      color: theme.colors.accent,
      borderWidth: 'thin',
      width: 'max-content',
  }}>
    <div css={theme.styles.button} >
      {label}
      <div css={{paddingLeft: '8px', display: 'inline'}}>{'\u25BC'}</div>
    </div>
  </div>
}