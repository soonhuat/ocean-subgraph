import { NewPool } from '../@types/FactoryRouter/FactoryRouter'
import { Pool } from '../@types/schema'
import { BPool } from '../@types/templates'

export function handleNewPool(event: NewPool): void {
  BPool.create(event.params.poolAddress)
  const pool = new Pool(event.params.poolAddress.toHexString())
  pool.save()
}