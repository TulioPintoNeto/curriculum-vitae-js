import { CustomElement } from "./custom_element";

export class NodeElement implements CustomElement {
  content: Node;

  constructor(content: Node) {
    this.content = content;
  }
}
