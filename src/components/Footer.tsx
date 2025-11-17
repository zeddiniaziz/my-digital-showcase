const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Mohamed Aziz Zeddini. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
