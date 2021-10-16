import mongoose from 'mongoose'

/**
 * This function creates connection to the database with given options.
 * */
export const makeConnection = async () => {
  await mongoose
    .connect(
      process.env.NODE_ENV === 'development'
        ? process.env.DB_LOCAL!
        : process.env.DB_ATLAS!,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.info(`[${process.env.NODE_ENV}]` + '📀 Connected to Database')
    })
    .catch((error) => {
      console.error(
        `There was an error while connecting to database. 
			You likely forgot to include mongoDB connection URL or it is invalid.`,
        error
      )
    })
}