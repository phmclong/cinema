import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Sheon. 2020
      </Typography>
      <Typography variant="caption">
        Crafted with love |{' '}
        <Link href="https://www.facebook.com/code.name.long/" target="_blank" rel="noopener">
          Sheon
        </Link>
      </Typography>
    </div>
  );
}
