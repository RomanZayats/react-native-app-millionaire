import 'styled-components';
import { IPalette } from './palettes';

declare module 'styled-components' {
  export type DefaultTheme = IPalette;
}
