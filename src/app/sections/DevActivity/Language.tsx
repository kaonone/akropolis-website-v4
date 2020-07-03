import React from 'react';
import { Typography, TypographyProps } from 'shared/view/elements';
import { makeStyles, useTheme } from 'shared/styles';

export function Language({
  language,
  ...props
}: {
  language: string;
} & TypographyProps) {
  const classes = useStyles();
  const theme = useTheme();

  const defaultColor = theme.palette.text.secondary;
  const colorByLanguage: Record<string, string> = {
    JavaScript: theme.colors.heliotrope,
    TypeScript: theme.colors.pictonBlue,
    Rust: theme.colors.royalBlue2,
    Solidity: theme.colors.turquoise,
  };

  return (
    <Typography noWrap {...props}>
      <span className={classes.point} style={{ background: colorByLanguage[language] || defaultColor }} />
      {language}
    </Typography>
  );
}

export const useStyles = makeStyles(() => ({
  point: {
    display: 'inline-block',
    width: '0.6em',
    height: '0.6em',
    borderRadius: '0.3em',
    marginRight: '0.5em',
  },
}));
