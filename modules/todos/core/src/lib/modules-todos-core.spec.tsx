import { render } from '@testing-library/react';

import ModulesTodosCore from './modules-todos-core';

describe('ModulesTodosCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesTodosCore />);
    expect(baseElement).toBeTruthy();
  });
});
