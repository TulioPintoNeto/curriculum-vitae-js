import { MainContent } from "./main_content";
import { Title } from "./title";

export class MainSection<Content extends MainContent> {
  title: Title;
  content: Content[];

  constructor(params: { title: Title; content: Content[] }) {
    this.title = params.title;
    this.content = params.content;
  }
}
