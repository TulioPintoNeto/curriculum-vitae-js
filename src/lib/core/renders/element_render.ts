export abstract class ElementRender {
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
