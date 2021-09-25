import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //receber o token
  const authToken = request.headers.authorization;

  //Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  //Validar se token é valido
  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(token, "45f8lu4n9f555br4z1l9009guiD4nt4589") as IPayload;

    //Recuperar informações do usuário 
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }

}