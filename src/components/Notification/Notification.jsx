import css from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.text}>{message}</p>
    </div>
  );
};

export default Notification;
