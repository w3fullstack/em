import Dexie from 'dexie'

const db = new Dexie('EM')
db.version(1).stores({
  // thoughtIndex: '++id, name, age, *tags',
  // contextIndex: 'id, score'
})

export default db