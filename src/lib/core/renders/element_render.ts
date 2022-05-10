import { Render } from "./render";

export abstract class ElementRender<
  Params,
  BuildResponse extends Node
> extends Render<Params, BuildResponse> {
  content: BuildResponse;

  constructor(params: Params) {
    super();
    this.content = this.build(params);
  }

  protected classes(): string[] {
    return [];
  }

  protected _getClassesWith(additionalClasses?: string[]): string[] {
    const classes = this.classes();

    if (additionalClasses !== undefined) {
      classes.push(...additionalClasses);
    }

    return classes;
  }
}
