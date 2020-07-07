export interface Media {
  id: number;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    coverImageTopOffset: number;
    titles: {
      en: string;
      en_jp: string;
    };
    canonicalTitle: string;
    abbreviatedTitles: string;
    averageRating: number;
    ratingFrequencies: {
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
      9: number;
      10: number;
      11: number;
      12: number;
      13: number;
      14: number;
      15: number;
      16: number;
      17: number;
      18: number;
      19: number;
      20: number;
    };
    userCount: number;
    favoritesCount: number;
    startDate: string;
    endDate: string;
    nextRelease: string;
    popularityRank: number;
    ratingRank: number;
    ageRating: number;
    ageRatingGuide: string;
    subtype: string;
    status: string;
    tba: string;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
      meta: {
        dimensions: {
          tiny: {
            width: string;
            height: string;
          };
          small: {
            width: string;
            height: string;
          };
          medium: {
            width: string;
            height: string;
          };
          large: {
            width: string;
            height: string;
          };
        };
      };
    };
    coverImage: string;
    chapterCount: number;
    volumeCount: number;
    serialization: string;
    mangaType: string;
  };
  relationships: {
    genres: {
      links: {
        self: string;
        related: string;
      };
    };
    categories: {
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
    installments: {
      links: {
        self: string;
        related: string;
      }
    }
    mappings: {
      links: {
        self: string;
        related: string;
      };
    };
    reviews: {
      links: {
        self: string;
        related: string;
      };
    };
    mediaRelationships: {
      links: {
        self: string;
        related: string;
      };
    };
    characters: {
      links: {
        self: string;
        related: string;
      };
    };
    staff: {
      links: {
        self: string;
        related: string;
      };
    };
    productions: {
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
    chapters: {
      links: {
        self: string;
        related: string;
      };
    };
    mangaCharacters: {
      links: {
        self: string;
        related: string;
      };
    };
    mangaStaff: {
      links: {
        self: string;
        related: string;
      };
    };
  };
}

export interface MediaCharacters {
  id: number;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    role: string;
  };
  relationships: {
    media: {
      links: {
        self: string;
        related: string;
      };
    };
    character: {
      links: {
        self: string;
        related: string;
      };
    };
    voices: {
      links: {
        self: string;
        related: string;
      };
    };
  };
}

export interface MediaCharactersResponse {
  data: MediaCharacters[];
  meta: {
    count: number;
  };
  links: {
    first: string;
    last: string;
  };
}
