import path from 'path'
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'db.sqlite')
})

export const connect = async (): Promise<void> => {
  await sequelize.authenticate()
  console.log('Database connected')
}
