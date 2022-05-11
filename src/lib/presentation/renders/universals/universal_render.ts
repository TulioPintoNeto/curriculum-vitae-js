import { NodeElement } from "../../../core/renders/elements/node_element";

export interface RenderParams {
  classes?: string[];
  children?: Node[];
}

export interface NewRenderParams {
  classes?: string[];
  children?: NodeElement[];
}

export abstract class UniversalRender {
  static createDiv(params?: NewRenderParams): HTMLDivElement {
    return UniversalRender._create({
      tagName: "div",
      renderParams: {
        children: this._contentToNode(params?.children),
        classes: params?.classes,
      },
    });
  }

  static createI(params?: NewRenderParams): HTMLElement {
    return UniversalRender._create({
      tagName: "i",
      renderParams: {
        children: this._contentToNode(params?.children),
        classes: params?.classes,
      },
    });
  }

  static createParagraph(params?: NewRenderParams): HTMLParagraphElement {
    return UniversalRender._create({
      tagName: "p",
      renderParams: {
        children: this._contentToNode(params?.children),
        classes: params?.classes,
      },
    });
  }

  private static _contentToNode(elements?: NodeElement[]): Node[] {
    const nodes: Node[] = [];

    elements?.forEach((element) => {
      nodes.push(element.content);
    });

    return nodes;
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

  static removeAllChildren(element: HTMLElement): void {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
