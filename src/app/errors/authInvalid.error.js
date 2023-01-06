export default class AuthInvalid extends Error {
  constructor(status) {
    super();
    this.status = status;
    this.description = "Unauthorized";
    this.message = "dados inválidos";
  }
}
