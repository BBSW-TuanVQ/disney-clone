import styled from "styled-components";
import styles from "./Login.module.scss"
const Login = (props) => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.cta}`}>
          <img className={`${styles.ctaLogoOne}`} src="/images/cta-logo-one.svg" alt="" />
          <a href="#" className={`${styles.signUp}`}>GET ALL THERE</a>
          <p className={`${styles.description}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <img className={`${styles.ctaLogoTwo}`} src="/images/cta-logo-two.png" alt=""/>
        </div>
        <div className={`${styles.bgImage}`} />
      </div>
    </section>
  );
};

export default Login;
