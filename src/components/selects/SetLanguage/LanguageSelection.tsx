import useLanguage from '@hooks/language';
import useTheme from '@hooks/theme';
import { RiEarthFill, RiEarthLine } from '@remixicon/react';
import { isValidLanguage } from '@utils/functions';
import { ColorScheme, Language } from '@utils/properties';

function ChangeLanguageButton(): JSX.Element {
  const { setLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <>
      {theme === ColorScheme.Light ? <RiEarthLine /> : <RiEarthFill />}
      <select
        name="page-language"
        id="nb-change-language"
        aria-label="change page language"
        onChange={(event) => {
          if (isValidLanguage(event.target.value))
            setLanguage(event.target.value as Language);
        }}
      >
        <option value="en">en</option>
        <option value="pt-br">pt</option>
      </select>
    </>
  );
}

export default ChangeLanguageButton;
