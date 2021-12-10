interface IUser {
  id: string;
  username: string;
  pets: IPet[];
}

interface IPet {
  nome: string;
  idade: number;
  peso: number;
  cor: string;
  raca: string;
  codigo: string;
}

type UserState = {
  user: IUser;
};

type UserAction = {
  type: string;
  user: IUser;
};

type DispatchType = (args: UserAction) => UserAction;
