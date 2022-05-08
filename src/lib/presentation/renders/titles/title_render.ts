import { AppendRender } from "../../../core/renders/append_render";

interface TitleRenderParams {
  text: string;
  fatherId: string;
}

export class TitleRender extends AppendRender<TitleRenderParams> {
  fatherId!: string;

  build(params: TitleRenderParams): void {
    this.fatherId = params.fatherId;

    this.append(params.text);
  }
}
