const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Mohamed Aziz Zeddini. Computer Science Student & Full-Stack Developer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
