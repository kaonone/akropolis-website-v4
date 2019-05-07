import * as React from 'react';
import cn from 'classnames';

import { Button, Grid } from 'shared/view/elements';
import { Popover } from 'shared/view/components';

import { StylesProps, provideStyles } from './QuestWinners.style';

interface IProps {
  questName: string;
  totalRewards: string;
  roundsCount: number;
  winners: string[];
}

function QuestWinners(props: IProps & StylesProps) {
  const { classes, questName, totalRewards, roundsCount, winners } = props;
  const buttonRef = React.useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        className={cn(classes.button, { [classes.withOpacity]: !isOpen })}
        variant="contained"
        buttonRef={buttonRef}
        onClick={setIsOpen.bind(null, true)}
        size="large"
      >
        {questName}
      </Button>
      <Popover
        open={isOpen}
        anchorEl={buttonRef.current}
        onClose={setIsOpen.bind(null, false)}
        classes={{ paper: classes.paper }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <h4 className={classes.title}>Total rewards</h4>
            <div className={classes.value}>{totalRewards}</div>
          </Grid>
          <Grid item xs={12}>
            <h4 className={classes.title}>Rounds</h4>
            <div className={classes.value}>{roundsCount}</div>
          </Grid>
          <Grid item xs={12}>
            <h4 className={classes.title}>Winners</h4>
            <Grid container>
              {winners.map(winner => (
                <Grid item key={winner} xs={6} className={classes.winner}>{winner}</Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
}

export default provideStyles(QuestWinners);
