import React from "react";
import CookieConsent from "react-cookie-consent";

const CookiePopup = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Прийняти"
      declineButtonText="Відхилити"
      enableDeclineButton
      cookieName="myProjectCookieConsent"
      style={{ background: "#2B373B", color: "#fff" }}
      buttonStyle={{ background: "#4eaf0a", color: "#fff", fontSize: "13px", borderRadius: "5px" }}
      declineButtonStyle={{ background: "#e84118", color: "#fff", fontSize: "13px", borderRadius: "5px" }}
      expires={150}
    >
      Ми використовуємо кукі для покращення роботи. Ви можете ознайомитися з нашою{" "}
      <a 
        href="https://github.com/ivantimkov/project/blob/main/PRIVACY_POLICY.md"
        target="_blank" 
        style={{ color: "#f1d600", textDecoration: "underline" }}
      >
        Політикою конфіденційності
      </a>.
    </CookieConsent>
  );
};

export default CookiePopup;