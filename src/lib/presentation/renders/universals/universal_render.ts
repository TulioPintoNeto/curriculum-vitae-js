import { NodeElement } from "../../../core/renders/elements/node_element";

interface RenderParams {
  classes?: string[];
  children?: NodeElement[];
}

export abstract class UniversalRender {
  static createDiv(params?: RenderParams): HTMLDivElement {
    return UniversalRender._create({
      tagName: "div",
      renderParams: params,
    });
  }

  static createI(params?: RenderParams): HTMLElement {
    return UniversalRender._create({
      tagName: "i",
      renderParams: params,
    });
  }

  static createParagraph(params?: RenderParams): HTMLParagraphElement {
    return UniversalRender._create({
      tagName: "p",
      renderParams: params,
    });
  }

  static createSpan(params?: RenderParams): HTMLSpanElement {
    return UniversalRender._create({
      tagName: "span",
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
      element.append(...this._getChildrenNodes(renParams?.children));
    }

    return element;
  }

  private static _getChildrenNodes(elements?: NodeElement[]): Node[] {
    const nodes: Node[] = [];

    elements?.forEach((element) => {
      nodes.push(element.content);
    });

    return nodes;
  }

  static removeAllChildren(element: HTMLElement): void {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
