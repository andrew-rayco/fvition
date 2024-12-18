import {
  GridResponse,
  GridResultResponse,
  QualiDataFull,
  QualiResponse,
  QualiResult,
  QualiResultResponse,
  ResultsData,
  ResultsDataFull,
} from '../types/api';

type LocationType = { Location: { country: string } };

export const compareCircuits = (a: LocationType, b: LocationType) => {
  const aCountry = a.Location.country;
  const bCountry = b.Location.country;
  if (aCountry < bCountry) {
    return -1;
  }
  if (aCountry > bCountry) {
    return 1;
  }
  return 0;
};

export const mapQualiData = (data: QualiResponse): QualiDataFull => {
  if (!data.QualifyingResults) {
    return { noData: true };
  }

  const qualiResults: QualiResult[] = [];
  data.QualifyingResults?.forEach((result: QualiResultResponse) => {
    qualiResults.push({
      position: result.position,
      driverUrl: result.Driver.url,
      forename: result.Driver.givenName,
      surname: result.Driver.familyName,
      constructorUrl: result.Constructor.url,
      constructorName: result.Constructor.name,
      q1: result.Q1,
      q2: result.Q2,
      q3: result.Q3,
    });
  });

  const cleanQualiData = {
    raceName: data.raceName,
    year: data.season,
    qualifyingData: qualiResults,
  };

  return cleanQualiData;
};

const compareGridPos = (a: { grid: string }, b: { grid: string }) => {
  const gridA = Number(a.grid);
  const gridB = Number(b.grid);

  let comparison = 0;
  if (gridA > gridB) {
    comparison = 1;
  } else if (gridA < gridB) {
    comparison = -1;
  }
  return comparison;
};

const sortGrid = (gridData: StrippedResultsType[]) => {
  gridData.forEach((result: StrippedResultsType) => {
    if (result.grid === '0') {
      result.grid = '99';
    }
    if (result.grid === '99') {
      result.grid = 'Pit';
    }
  });
  gridData.sort(compareGridPos);
  return gridData;
};

type StrippedResultsType = {
  grid: string;
  driverUrl: string;
  forename: string;
  surname: string;
  constructorUrl: string;
  constructorName: string;
};

export const mapGridData = (data: GridResponse) => {
  const strippedResults: StrippedResultsType[] = [];
  data.Results.forEach((result: GridResultResponse) => {
    strippedResults.push({
      grid: result.grid,
      driverUrl: result.Driver.url,
      forename: result.Driver.givenName,
      surname: result.Driver.familyName,
      constructorUrl: result.Constructor.url,
      constructorName: result.Constructor.name,
    });
  });

  const sortedResults = sortGrid(strippedResults);

  const cleanData = {
    raceName: data.raceName,
    year: data.season,
    gridData: sortedResults,
  };

  return cleanData;
};

export const mapResultsData = (data: GridResponse) => {
  const resultData: ResultsData[] = [];
  data.Results.forEach((result: GridResultResponse) => {
    const {
      position,
      Driver,
      Constructor,
      Time,
      status,
      FastestLap,
      positionText,
      laps,
    } = result;
    resultData.push({
      position: position,
      driverUrl: Driver.url,
      forename: Driver.givenName,
      surname: Driver.familyName,
      constructorUrl: Constructor.url,
      constructorName: Constructor.name,
      raceTime: Time ? Time.time : status,
      laps: laps,
      fastestLapTime: FastestLap ? FastestLap.Time.time : '-',
      fastestLapSpeed: FastestLap ? FastestLap.AverageSpeed.speed : '-',
      fastestLapNumber: FastestLap ? FastestLap.lap : '-',
      status: status,
      positionText: positionText,
    });
  });

  const cleanResultsData: ResultsDataFull = {
    raceYear: data.season,
    raceName: data.raceName,
    results: resultData,
  };

  return cleanResultsData;
};

export const findFastestLap = (resultsArray: ResultsData[]) => {
  let fastestLapTime = '0';
  let fastestLapSpeed = '0';
  resultsArray.forEach((singleResult) => {
    if (
      singleResult.fastestLapSpeed &&
      Number(singleResult.fastestLapSpeed) >= Number(fastestLapSpeed)
    ) {
      fastestLapSpeed = singleResult.fastestLapSpeed;
      fastestLapTime = singleResult.fastestLapTime;
    }
  });

  return fastestLapTime;
};
