import { AppendRender } from "../../../core/renders/append_render";

interface TitleAppenderParams {
  text: string;
  fatherId: string;
}

export class TitleAppender extends AppendRender<TitleAppenderParams> {
  fatherId!: string;

  constructor(params: TitleAppenderParams) {
    super();
    this.build(params);
  }

  build(params: TitleAppenderParams): void {
    this.fatherId = params.fatherId;

    this.append(params.text);
  }
}
