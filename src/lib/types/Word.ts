export interface WordApiSuccessResponse {
  word: string;
  phonetics: {
    audio: string;
    text: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}


export interface WordApiFalureResponse {
  title: string;
  message: string;
  resolution: string;
}

export const isResponseFailure = <T extends WordApiFalureResponse>(val: any): val is T => {
  return val?.title !== undefined
}
