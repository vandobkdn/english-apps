import { Navigation as NavigationType } from '@english/shared-models';

import { View, Clickable } from '../../primitives';
import { useAppContext } from '../../app.context';

type NavItemType = { label: NavigationType; path: string };

const NAV_ITEMS: NavItemType[] = [
  { label: 'Word List', path: '/words' },
  { label: 'My Words', path: '/my-words' },
  { label: 'Learning Words', path: '/learn-words' },
  { label: 'Add Word', path: '/new-words' },
];

const Navigation = () => {
  const {
    state: { activeNav },
    setActiveNav,
  } = useAppContext();

  console.log('activeNav', activeNav);
  return (
    <View tag="ul" className="navigator">
      {NAV_ITEMS.map(({ label }) => (
        <Clickable
          key={label}
          tag="li"
          className={`${activeNav === label ? 'active' : ''}`}
          onClick={() => setActiveNav(label)}
        >
          {label}
        </Clickable>
      ))}
    </View>
  );
};

export default Navigation;
