export interface RenderParams {
  classes?: string[];
  children?: Node[];
}

export class UniversalRender {
  createDiv(params?: RenderParams): HTMLDivElement {
    return UniversalRender._create({
      tagName: "div",
      renderParams: params,
    });
  }

  createI(params?: RenderParams): HTMLElement {
    return UniversalRender._create({
      tagName: "i",
      renderParams: params,
    });
  }

  createParagraph(params?: RenderParams): HTMLParagraphElement {
    return UniversalRender._create({
      tagName: "p",
      renderParams: params,
    });
  }

  static createText(text: string): Text {
    return document.createTextNode(text);
  }

  static _create<TagName extends keyof HTMLElementTagNameMap>(params: {
    tagName: TagName;
    renderParams?: RenderParams;
  }): HTMLElementTagNameMap[TagName] {
    const element = document.createElement(params.tagName);
    const renParams = params.renderParams;

    if (renParams?.classes != undefined) {
      element.classList.add(...renParams?.classes);
    }

    if (renParams?.children != undefined) {
      element.append(...renParams?.children);
    }

    return element;
  }

  removeAllChildren(element: HTMLElement): void {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
