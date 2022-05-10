import { Render } from "./render";

export abstract class ElementRender<Params, BuildResponse> extends Render<
  Params,
  BuildResponse
> {
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
