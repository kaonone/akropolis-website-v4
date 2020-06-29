import * as React from 'react';

import { Section } from 'app/components/Section/Section';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { Tab, TabContext, TabList, TabPanel, Grid } from 'shared/view/elements';
import { makeStyles, getGrid } from 'shared/styles';

import { DevActivityChartSync } from './DevActivityChart/DevActivityChart';
import { Languages } from './Languages';
import { LastCommit } from './LastCommit';
import { Repos } from './Repos';

interface IProps {
  className?: string;
}

const tKeys = tKeysAll.new.devActivity;

export function DevActivity(props: IProps) {
  const { className } = props;
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState<'overview' | 'topRepos'>('overview');
  const { t } = useTranslate();

  const handleTabChange = React.useCallback((_event: React.ChangeEvent<{}>, newValue: 'overview' | 'topRepos') => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Section className={className} title={t(tKeys.title.getKey())}>
      <TabContext value={currentTab}>
        <TabList onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label={t(tKeys.overview.getKey())} value="overview" />
          <Tab label={t(tKeys.topRepos.getKey())} value="topRepos" />
        </TabList>
        <TabPanel value="overview" className={classes.tabPanel}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8} xl={9}>
              <DevActivityChartSync />
            </Grid>
            <Grid container spacing={3} item xs={12} lg={4} xl={3}>
              <Grid item xs={12} md={4} lg={12}>
                <LastCommit />
              </Grid>
              <Grid item xs={12} md={8} lg={12}>
                <Languages />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="topRepos" className={classes.tabPanel}>
          <Repos />
        </TabPanel>
      </TabContext>
    </Section>
  );
}

const useStyles = makeStyles((theme) => ({
  tabPanel: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  ...getGrid(
    theme,
    [
      {
        breakpoint: 'mobileXS',
        count: 2,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
      {
        breakpoint: 'tabletXS',
        count: 4,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
      {
        breakpoint: 'tabletSM',
        count: 2,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
    ],
    {
      item: {
        display: 'flex',
        alignItems: 'center',
      },
    },
  ),
}));
