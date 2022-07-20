

export class InvalidFieldError extends Error{
    constructor () {
      super('Valor invalido para este campo!')
    }
  }