import { Appender } from "../../../core/renders/appender";

interface TitleAppenderParams {
  text: string;
  fatherId: string;
}

export class TitleAppender extends Appender<TitleAppenderParams> {
  fatherIdVar!: string;

  build(params: TitleAppenderParams): void {
    this.fatherIdVar = params.fatherId;

    this.append(params.text);
  }

  getFatherId(): string {
    return this.fatherIdVar;
  }
}
