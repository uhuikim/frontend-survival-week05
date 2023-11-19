import { render, screen } from '@testing-library/react';
import RestaurantTable from './RestaurantTable';
import restaurants from '../../fixtures/restaurants';

describe('RestaurantTable', () => {
  it('renders element', () => {
    render(<RestaurantTable restaurants={restaurants} />);

    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
  });
});
