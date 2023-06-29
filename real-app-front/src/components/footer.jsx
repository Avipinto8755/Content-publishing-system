const Footer = () => {
  return (
    <footer className="border-top pt-3 py-2 text-center">
      <span>
        <a href="https://www.instagram.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png"
            alt="logo_instagram"
            width="25"
          ></img>
        </a>
        <a href="https://www.facebook.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png"
            alt="logo_facebook"
            width="25"
          ></img>
        </a>
      </span>
      <span> | </span>
      <span>
        Pinto <i className="bi bi-fan"></i> App
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
