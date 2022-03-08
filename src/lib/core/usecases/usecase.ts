export abstract class UseCase<Type> {
  abstract call(): Type;
}
