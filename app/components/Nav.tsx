import Switch from "./Switch";
import Notification from "./Notification";
import Question from "./Questions";

export default function Nav() {
  return (
    <div className="flex gap-4 col-start-5">
      <Switch label="Ativar recurso" />
      <Notification />
      <Question />
    </div>
  );
}