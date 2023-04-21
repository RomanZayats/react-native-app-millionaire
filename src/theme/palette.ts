type THexColor = `#${string}`;

export interface IPalette {
  primary: THexColor;
  primaryPressed: THexColor;
  secondary: THexColor;
  secondaryGray: THexColor;
  correct: THexColor;
  correctSecondary: THexColor;
  wrong: THexColor;
  wrongSecondary: THexColor;
  primaryBackground: THexColor;
  secondaryBackground: THexColor;
  black: THexColor;
  white: THexColor;
}

const defaultPalette: IPalette = {
  primary: '#FF8B37',
  primaryPressed: '#E87928',
  secondary: '#FFAC70',
  secondaryGray: '#D0D0D8',
  correct: '#47D867',
  correctSecondary: '#E6FAEA',
  wrong: '#EC6259',
  wrongSecondary: '#FDEEED',
  primaryBackground: '#F5F5F7',
  secondaryBackground: '#FFF3EB',
  black: '#1C1C21',
  white: '#FFFFFF',
};

export default defaultPalette;
