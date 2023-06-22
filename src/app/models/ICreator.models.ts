export interface ICreator {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  series: SeriesList;
  stories: StoryList;
  comics: ComicList;
  events: EventList;
}

interface Url {
  type: string;
  url: string;
}

interface Image {
  path: string;
  extension: string;
}

interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}

interface SeriesSummary {
  resourceURI: string;
  name: string;
}

interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}

interface ComicSummary {
  resourceURI: string;
  name: string;
}

interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}

interface EventSummary {
  resourceURI: string;
  name: string;
}
