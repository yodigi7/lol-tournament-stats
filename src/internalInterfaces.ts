export interface PersonStatistics {
  kda: number;
  gameDuration: number;
  summonerName: string;
  currentAccountId: string;
  summonerId: string;
  accountId: string;
  csDiffPerMinDeltas: {
    [key: string]: number;
  };
  goldPerMinDeltas: {
    [key: string]: number;
  };
  xpDiffPerMinDeltas: {
    [key: string]: number;
  };
  creepsPerMinDeltas: {
    [key: string]: number;
  };
  xpPerMinDeltas: {
    [key: string]: number;
  };
  damageTakenDiffPerMinDeltas: {
    [key: string]: number;
  };
  damageTakenPerMinDeltas: {
    [key: string]: number;
  };
  neutralMinionsKilledTeamJungle: number;
  visionScore: number;
  magicDamageDealtToChampions: number;
  largestMultiKill: number;
  totalTimeCrowdControlDealt: number;
  longestTimeSpentLiving: number;
  tripleKills: number;
  kills: number;
  totalScoreRank: number;
  neutralMinionsKilled: number;
  damageDealtToTurrets: number;
  physicalDamageDealtToChampions: number;
  damageDealtToObjectives: number;
  totalUnitsHealed: number;
  totalDamageTaken: number;
  wardsKilled: number;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  quadraKills: number;
  magicDamageDealt: number;
  firstBloodAssist: boolean;
  damageSelfMitigated: number;
  magicalDamageTaken: number;
  firstInhibitorKill: boolean;
  trueDamageTaken: number;
  assists: number;
  goldSpent: number;
  trueDamageDealt: number;
  participantId: number;
  physicalDamageDealt: number;
  sightWardsBoughtInGame: number;
  totalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  totalPlayerScore: number;
  win: boolean;
  objectivePlayerScore: number;
  totalDamageDealt: number;
  neutralMinionsKilledEnemyJungle: number;
  deaths: number;
  wardsPlaced: number;
  perkPrimaryStyle: number;
  perkSubStyle: number;
  turretKills: number;
  firstBloodKill: boolean;
  trueDamageDealtToChampions: number;
  goldEarned: number;
  killingSprees: number;
  unrealKills: number;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  champLevel: number;
  doubleKills: number;
  inhibitorKills: number;
  firstInhibitorAssist: boolean;
  combatPlayerScore: number;
  visionWardsBoughtInGame: number;
  pentaKills: number;
  totalHeal: number;
  totalMinionsKilled: number;
  timeCCingOthers: number;
}

export interface AggregatePersonStatistics {
  gamesPlayed: number;
  avgKda: number;
  averageGameLength: number;
  winRatio: number;

  summonerName: string;
  currentAccountId: string;
  summonerId: string;
  accountId: string;
  avgNeutralMinionsKilledTeamJungle: number;
  avgVisionScore: number;
  avgMagicDamageDealtToChampions: number;
  avgLargestMultiKill: number;
  avgTotalTimeCrowdControlDealt: number;
  avgLongestTimeSpentLiving: number;
  avgTripleKills: number;
  avgKills: number;
  avgTotalScoreRank: number;
  avgNeutralMinionsKilled: number;
  avgDamageDealtToTurrets: number;
  avgPhysicalDamageDealtToChampions: number;
  avgDamageDealtToObjectives: number;
  avgTotalUnitsHealed: number;
  avgTotalDamageTaken: number;
  avgWardsKilled: number;
  avgLargestCriticalStrike: number;
  avgLargestKillingSpree: number;
  avgQuadraKills: number;
  avgMagicDamageDealt: number;
  avgDamageSelfMitigated: number;
  avgMagicalDamageTaken: number;
  avgTrueDamageTaken: number;
  avgAssists: number;
  avgGoldSpent: number;
  avgTrueDamageDealt: number;
  avgParticipantId: number;
  avgPhysicalDamageDealt: number;
  avgSightWardsBoughtInGame: number;
  avgTotalDamageDealtToChampions: number;
  avgPhysicalDamageTaken: number;
  avgTotalPlayerScore: number;
  avgObjectivePlayerScore: number;
  avgTotalDamageDealt: number;
  avgNeutralMinionsKilledEnemyJungle: number;
  avgDeaths: number;
  avgWardsPlaced: number;
  avgPerkPrimaryStyle: number;
  avgPerkSubStyle: number;
  avgTurretKills: number;
  avgTrueDamageDealtToChampions: number;
  avgGoldEarned: number;
  avgKillingSprees: number;
  avgUnrealKills: number;
  avgChampLevel: number;
  avgDoubleKills: number;
  avgInhibitorKills: number;
  avgCombatPlayerScore: number;
  avgVisionWardsBoughtInGame: number;
  avgPentaKills: number;
  avgTotalHeal: number;
  avgTotalMinionsKilled: number;
  avgTimeCCingOthers: number;
}

export interface TeamStatistics {
  [key: string]: any;
}
