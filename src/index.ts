import { Language } from "./lib/core/languages/language";
import { appControllerFactory } from "./lib/factories/controllers/app_controller_factory";
import { AppController } from "./lib/presentation/controllers/app_controller";
import { AppStateController } from "./lib/presentation/controllers/app_state_controller";

const appStateController = new AppStateController();

const main = (language: Language) => {
  const appController: AppController = appControllerFactory(language);
  appController.update();
};

main(appStateController.language);

const toggleLanguage = () => {
  appStateController.toggleLanguage();
  main(appStateController.language);
};

const changeLanguageButton = document.getElementById("changeLanguage");

if (changeLanguageButton !== null) {
  changeLanguageButton.onclick = toggleLanguage;
}
