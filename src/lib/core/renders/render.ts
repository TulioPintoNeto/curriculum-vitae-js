export abstract class Render<Params, BuildResponse> {
  abstract build(params: Params): BuildResponse;
}
