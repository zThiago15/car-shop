interface IService<T> {
  create(object:unknown):Promise<T>,
  read():Promise<T[]>,
  readOne(_id:string):Promise<T | null>,
  update(_id:string, obj:unknown):Promise<T | null>,
  delete(_id:string):Promise<T | null>
}

export default IService;