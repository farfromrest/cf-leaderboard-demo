import { schema } from 'normalizr'

export const athlete = new schema.Entity(
  'athletes',
  {},
  {
    idAttribute: 'userid',
    processStrategy: entity => {
      return {
        id: entity.userid,
        rank: entity.overallrank,
        name: entity.name,
        picture: entity.profilepic,
        region: entity.region,
        points: entity.overallscore,
        workouts: entity.scores.map(score => ({
          rank: score.workoutrank,
          score: score.scoredisplay
        }))
      }
    }
  }
)
