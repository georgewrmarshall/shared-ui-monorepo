import React from 'react';

export const withDefaultBackground = (Story: React.ComponentType) => (
  <div style={{ backgroundColor: 'var(--color-background-default)' }}>
    <Story />
  </div>
);
