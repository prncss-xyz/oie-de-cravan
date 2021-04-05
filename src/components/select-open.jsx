import React from 'react';
import theme from './theme';

export default function SelectOpen({label}) {    
  return <div css={{
      padding: '12px 18px',
      borderStyle: 'solid',
      borderColor: theme.colors.accent,
      backgroundColor: theme.colors.accent,
      borderWidth: 'thin',
      width: 'max-content',
  }}>
    <div css={theme.styles.button}>
      {label}
      <div css={{paddingLeft: '8px', display: 'inline'}}>{'\u25B2'}</div>
    </div>
  </div>
}