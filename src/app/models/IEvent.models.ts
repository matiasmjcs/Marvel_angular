export interface IEvent {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  series: SeriesList;
  characters: CharacterList;
  creators: CreatorList;
  next: EventSummary;
  previous: EventSummary;
}

interface Url {
  type: string;
  url: string;
}

interface Image {
  path: string;
  extension: string;
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

interface CharacterList {
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterSummary[];
}

interface CharacterSummary {
  resourceURI: string;
  name: string;
  role: string;
}

interface CreatorList {
  available: number;
  returned: number;
  collectionURI: string;
  items: CreatorSummary[];
}

interface CreatorSummary {
  resourceURI: string;
  name: string;
  role: string;
}

interface EventSummary {
  resourceURI: string;
  name: string;
}
