import css from "./BookForm.module.css";

export default function BookForm() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.desc}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form}>
        <div className={css.formWrapper}>
          <input className={css.input} type="text" placeholder="Name*" />
          <input className={css.input} type="text" placeholder="Email*" />
          <input className={css.input} type="text" placeholder="Booking date" />
          <textarea className={css.textarea} placeholder="Comment"></textarea>
        </div>
        <button className={css.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
