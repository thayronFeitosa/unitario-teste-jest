interface ICreateUser {
  login: string;
  password: string;
  id_typeuser: number;

  name: string;
  cnpj?: string;
  telephone: string;
  email: string;
  cpf?: string;

}
export { ICreateUser };
