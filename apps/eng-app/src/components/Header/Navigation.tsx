import { NAV_ITEM } from '@english/shared-models';
import { useNavigate, useLocation } from 'react-router-dom';

import { View, Clickable } from '../../primitives';

const Navigation = () => {
  const navigateTo = useNavigate();
  const { pathname } = useLocation();

  return (
    <View tag="ul" className="navigator">
      {Object.entries(NAV_ITEM).map(([path, label]) => (
        <Clickable
          key={label}
          tag="li"
          className={`${pathname === `/${path}` ? 'active' : ''}`}
          onClick={() => navigateTo(`/${path}`)}
        >
          {label}
        </Clickable>
      ))}
    </View>
  );
};

export default Navigation;
