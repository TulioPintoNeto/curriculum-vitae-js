import { CustomElement } from "./custom_element";

export class TextElement implements CustomElement {
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
