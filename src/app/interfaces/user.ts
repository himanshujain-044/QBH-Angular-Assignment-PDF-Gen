export class User {
  constructor(
    public id?: string,
    public name?: string,
    public email?: string,
    public phone?: number | string,
    public address?: string
  ) {}
}
