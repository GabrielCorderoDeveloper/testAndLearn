export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): void;
}
/// const driver: Driver = {
///   database: '',
///   password: '',
///   port: 23
/// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    //code
  }
  isConnected(name: string): void {
    //code
  }
  connect(): void {
    //code
  }


}
