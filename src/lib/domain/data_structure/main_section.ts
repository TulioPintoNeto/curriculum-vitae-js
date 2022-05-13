import { MainContent } from "../entities/main_content";
import { Title } from "../entities/title";

export class MainSection<Content extends MainContent> {
  title: Title;
  content: Content[];

  constructor(params: { title: Title; content: Content[] }) {
    this.title = params.title;
    this.content = params.content;
  }
}
