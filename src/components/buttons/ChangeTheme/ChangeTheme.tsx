import useTheme from '@hooks/theme';
import { RiMoonFill, RiSunLine } from '@remixicon/react';
import { ColorScheme } from '@utils/properties';

function ChangeThemeButton(): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="change color theme"
      onClick={() =>
        setTheme(
          theme === ColorScheme.Dark ? ColorScheme.Light : ColorScheme.Dark,
        )
      }
    >
      {theme === ColorScheme.Light ? <RiSunLine /> : <RiMoonFill />}
    </button>
  );
}

export default ChangeThemeButton;
