import 'styled-components/native';
import { IPalette } from 'theme/palette';

declare module 'styled-components/native' {
  // eslint-disable-next-line
  export interface DefaultTheme extends IPalette {}
}
