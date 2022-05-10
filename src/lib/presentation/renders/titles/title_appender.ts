import { Appender } from "../../../core/renders/appender";

interface TitleAppenderParams {
  text: string;
  fatherId: string;
}

export class TitleAppender extends Appender<TitleAppenderParams> {
  fatherId!: string;

  build(params: TitleAppenderParams): void {
    this.fatherId = params.fatherId;

    this.append(params.text);
  }
}
