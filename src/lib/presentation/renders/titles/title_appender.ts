import { Appender } from "../../../core/renders/appender";
import { TextElement } from "../../../core/renders/text_element";

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

  getFatherId(): string {
    return this.fatherIdVar;
  }
}
