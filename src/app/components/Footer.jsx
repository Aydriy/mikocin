import React from "react";
import { FooterLogo } from "./SvgComponents";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer_logo">
        <FooterLogo />
      </div>
      <div className="footer__container">
        <p className="text-center">
          <span>Статистика:</span> каждые 60 секунд врачи диагностируют опасные
          поражения внутренних органов, вызванные грибком, у 1-го пациент
        </p>
      </div>
    </footer>
  );
}
