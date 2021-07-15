import { TypeUser } from '@modules/users/infra/typeorm/entities/TypeUser';

import { ITypeUserRepository } from '../ITypeUserRepository';

class TypeUserRepositoryInMemory implements ITypeUserRepository {
 private typeUser: TypeUser [] = [];

 constructor() {
   const user1 = new TypeUser();
   const user2 = new TypeUser();
   const user3 = new TypeUser();

   Object.assign(user1, {
     id: 1,
     nameType: 'Filial',
   });
   Object.assign(user2, {
     id: 1,
     nameType: 'Usuário Padão',
   });
   Object.assign(user3, {
     id: 1,
     nameType: 'ar',
   });
   this.typeUser.push(user1);
   this.typeUser.push(user2);
   this.typeUser.push(user3);
 }
 create(nameType: string): Promise<TypeUser> {
   throw new Error('Method not implemented.');
 }
 listAll(): Promise<TypeUser[]> {
   throw new Error('Method not implemented.');
 }
 async listById(id: number): Promise<TypeUser> {
   return this.typeUser.find((typeUser) => typeUser.id === id);
 }
 async listByName(nameType: string): Promise<TypeUser> {
   return this.typeUser.find((typeUser) => typeUser.nameType === nameType);
 }
}
export { TypeUserRepositoryInMemory };
