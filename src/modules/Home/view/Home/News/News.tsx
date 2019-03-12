import * as React from 'react';
import { GridSize } from '@material-ui/core/Grid';

import news from 'data/news';
import { Adaptive } from 'services/adaptability';
import { Carousel, Grid } from 'shared/view/elements';
import NewsCard from './NewsCard/NewsCard';

const groupedByTwo = getNewsGroups(2);
const groupedByFour = getNewsGroups(4);

function News() {
  return (
    <>
      <Adaptive to="md">
        <Carousel animateHeight pagination="dots">
          {renderGroupedNews(groupedByTwo, 12)}
        </Carousel>
      </Adaptive>
      <Adaptive from="md">
        <Carousel animateHeight pagination="arrows">
          {renderGroupedNews(groupedByFour, 6)}
        </Carousel>
      </Adaptive>
    </>
  );
}

function renderGroupedNews(groupedNews: ReturnType<typeof getNewsGroups>, itemGridSize: GridSize) {
  return groupedNews.map((group, groupIndex) => (
    <Grid key={groupIndex} container spacing={16}>
      {group.map((item, itemIndex) => (
        <Grid key={itemIndex} item container xs={itemGridSize}><NewsCard {...item} /></Grid>
      ))}
    </Grid>
  ));
}

function getNewsGroups(groupLength: number) {
  const newsLength = news.length;
  const pagesLength = Math.floor(newsLength / groupLength);

  return Array
    .from({ length: pagesLength })
    .map((_, index) => news.slice(index * groupLength, Math.min((index + 1) * groupLength, newsLength)));
}

export default News;
