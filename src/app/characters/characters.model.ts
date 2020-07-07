export interface Character {
  id: number;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    names: {
      en: string;
      ja_jp: string;
    };
    canonicalName: string;
    otherNames: string[];
    name: string;
    malId: number;
    description: string;
    image: {
      original: string;
      meta: {
        dimensions: {};
      };
    };
  };
  relationships: {
    primaryMedia: {
      links: {
        self: string;
        related: string;
      };
    };
    castings: {
      links: {
        self: string;
        related: string;
      };
    };
    mediaCharacters: {
      links: {
        self: string;
        related: string;
      };
    };
    quotes: {
      links: {
        self: string;
        related: string;
      };
    };
  };
}

export interface CharactersResponse {
  data: Character[];
  meta: {
    count: number;
  };
  links: {
    first: string;
    prev: string;
    next: string;
    last: string;
  };
}
