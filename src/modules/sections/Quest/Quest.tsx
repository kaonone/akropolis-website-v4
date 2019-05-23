import * as React from 'react';
import cn from 'classnames';

import { useTranslate, tKeys as allTKeys } from 'services/i18n';
import { Button, Grid } from 'shared/view/elements';
import { StylesProps, provideStyles } from './Quest.style';
import { useCurrentTimeBreakpoint } from './useCurrentTimeBreakpoint';
import QuestWinners from './QuestWinners/QuestWinners';
import QuestFooter from './QuestFooter/QuestFooter';

const morningTime = '07:00:00';
const dayTime = '14:00:00';
const nightTime = '20:00:00';

interface IQuestResult {
  questNameTKey: string;
  totalRewards: string;
  roundsCount: number;
  winners: string[];
}

const tKeysShared = allTKeys.shared;
const tKeys = allTKeys.sections.quest;
const questResults: IQuestResult[] = [
  {
    questNameTKey: tKeys.names.quest1.getKey(),
    roundsCount: 10,
    totalRewards: '$45,000',
    winners: [
      'Ivan', 'Jack', 'Toad', 'Andrew Skripa', 'Amy', 'OWLBE', 'thebillionnet', 'Adina', 'Baltimora', 'Hansice',
    ],
  }, {
    questNameTKey: tKeys.names.quest2.getKey(),
    roundsCount: 10,
    totalRewards: '$55,000',
    winners: [
      'Daryl', 'Ritz', 'Kirby', 'Crypt0mata', 'I Z', 'Jack', 'Ivan', 'thebillionnet', 'Andrei Sandu', 'Toad',
    ],
  },
];

function Quest(props: StylesProps) {
  const { classes } = props;

  const { t } = useTranslate();
  const currentTime = useCurrentTimeBreakpoint([morningTime, dayTime, nightTime]);

  const classByTime: Record<string, string> = {
    [morningTime]: classes.isMorning,
    [dayTime]: classes.isDay,
    [nightTime]: classes.isNight,
  };

  return (
    <div className={cn(classes.root, classByTime[currentTime])}>
      <p className={classes.title}>{t(tKeys.title.getKey())}</p>
      <p className={classes.subtitle}>{t(tKeys.subtitle.getKey())}</p>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
      >
        {t(tKeysShared.comingSoon.getKey())}
      </Button>
      <div className={classes.resultsContainer}>
        <Grid container spacing={16} className={classes.results}>
          {questResults.map(result => (
            <Grid key={result.questNameTKey} item>
              <QuestWinners {...result} questName={t(result.questNameTKey)} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.footer}><QuestFooter /></div>
    </div>
  );
}

export default provideStyles(Quest);
