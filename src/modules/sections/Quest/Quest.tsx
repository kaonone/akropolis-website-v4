import * as React from 'react';
import cn from 'classnames';

import { Button, Grid } from 'shared/view/elements';
import { StylesProps, provideStyles } from './Quest.style';
import { useCurrentTimeBreakpoint } from './useCurrentTimeBreakpoint';
import QuestWinners from './QuestWinners/QuestWinners';
import QuestFooter from './QuestFooter/QuestFooter';

const text = {
  title: 'Akropolis Community Quest III',
  // tslint:disable-next-line:max-line-length
  subtitle: 'Historical in its fanfare, exciting in its adventure, the Akropolis community quest is here once again. Bringing you a series of exciting rounds with a total prize pool of $xxxxxx in AKT & ETH, we welcome  everyone on this journey! Seasoned professional or a lurking rookie, test your knowledge of the cryptosphere on a geeky adventure second to none.',
  button: 'Join in',
};

const morningTime = '07:00:00';
const dayTime = '14:00:00';
const nightTime = '20:00:00';

const questLink = '';

interface IQuestResult {
  questName: string;
  totalRewards: string;
  roundsCount: number;
  winners: string[];
}

const questResults: IQuestResult[] = [
  {
    questName: 'Quest I',
    roundsCount: 10,
    totalRewards: '$45,000',
    winners: [
      'Ivan', 'Jack', 'Toad', 'Andrew Skripa', 'Amy', 'OWLBE', 'thebillionnet', 'Adina', 'Baltimora', 'Hansice',
    ],
  }, {
    questName: 'Quest II',
    roundsCount: 10,
    totalRewards: '$55,000',
    winners: [
      'Daryl', 'Ritz', 'Kirby', 'Crypt0mata', 'I Z', 'Jack', 'Ivan', 'thebillionnet', 'Andrei Sandu', 'Toad',
    ],
  },
];

function Quest(props: StylesProps) {
  const { classes } = props;

  const currentTime = useCurrentTimeBreakpoint([morningTime, dayTime, nightTime]);

  const classByTime: Record<string, string> = {
    [morningTime]: classes.isMorning,
    [dayTime]: classes.isDay,
    [nightTime]: classes.isNight,
  };

  return (
    <div className={cn(classes.root, classByTime[currentTime])}>
      <p className={classes.title}>{text.title}</p>
      <p className={classes.subtitle}>{text.subtitle}</p>
      <Button
        href={questLink}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
      >
        {text.button}
      </Button>
      <div className={classes.resultsContainer}>
        <Grid container spacing={16} className={classes.results}>
          {questResults.map(result => (
            <Grid key={result.questName} item>
              <QuestWinners {...result} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.footer}><QuestFooter /></div>
    </div>
  );
}

export default provideStyles(Quest);
