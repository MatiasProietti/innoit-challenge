export interface CustomerBackend {
  id: number;
  name: string;
  country: string;
  status: string;
  balance: number;
}

export class Customer {
  public readonly id: number;
  public name: string;
  public country: string;
  public status: Status;
  public balance: number;

  constructor(id: number, name: string, country: string, status: Status, balance: number) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.status = status;
    this.balance = balance;
  }
}

export enum Status {
  PROPOSAL = 'proposal',
  UNQUALIFIED = 'unqualified',
  QUALIFIED = 'qualified',
  NEW = 'new',
  RENEWAL = 'renewal',
}

export const StatusDisplayName = {
  [Status.PROPOSAL]: 'Proposal',
  [Status.UNQUALIFIED]: 'Unqualified',
  [Status.QUALIFIED]: 'Qualified',
  [Status.NEW]: 'New',
  [Status.RENEWAL]: 'Renewal',
};

export class CustomerAdapter {
  static fromBackend(customerFromBackend: CustomerBackend): Customer {
    return new Customer(
      customerFromBackend.id,
      customerFromBackend.name,
      customerFromBackend.country,
      <Status>customerFromBackend.status,
      customerFromBackend.balance
    );
  }
}
