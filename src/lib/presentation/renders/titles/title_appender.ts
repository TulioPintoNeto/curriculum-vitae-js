import { Appender } from "../../../core/renders/appender";
import { NodeElement } from "../../../core/renders/elements/node_element";
import { TextElement } from "../../../core/renders/elements/text_element";

interface TitleAppenderParams {
  text: string;
  fatherId: string;
}

export class TitleAppender extends Appender<TitleAppenderParams> {
  fatherIdVar!: string;

  build(params: TitleAppenderParams): void {
    this.fatherIdVar = params.fatherId;

    this.append(new TextElement(params.text));
  }

  get fatherId(): string {
    return this.fatherIdVar;
  }
}
